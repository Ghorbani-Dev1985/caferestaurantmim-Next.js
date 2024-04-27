const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../../models/user");

exports.register = async (req, res, next) => {
  try {
    const { username, password, name, email, phone } = req.body;

    await userModel.registerValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const isUserExists = await userModel.findOne({
      $or: [{ username }, { email }],
    });

    if (isUserExists) {
      return res.status(405).json({
        message: "username or email is duplicate.",
      });
    }
    const countOfRegisteredUser = await userModel.count();


    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.create({
      email,
      username,
      name,
      phone,
      password: hashedPassword,
      role: countOfRegisteredUser > 0 ? "USER" : "ADMIN",
    });

    const userObject = user.toObject();

    Reflect.deleteProperty(userObject, "password");

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30 day",
    });

    return res.status(201).json({ user: userObject, accessToken });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { identifier, password } = req.body;
    await userModel.loginValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const user = await userModel.findOne({
      $or: [{ email: identifier }, { username: identifier }],
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "کاربری با جنین مشخصات یافت نگردید" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "ایمیل یا رمز عبور اشتباه است" });
    }

    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30 day",
    });

    return res.json({ accessToken });
  } catch (error) {
    next(error);
  }
};

exports.getMe = async (req, res, next) => {
  try {
    const userCourses = await courseUserModel
      .find({ user: req.user._id })
      .populate("course");

    const courses = [];

    for (const userCourse of userCourses) {
      courses.push(userCourse.course);
    }

    const adminNotifications = await notificationsModel.find({
      admin: req.user._id,
    });

    const notifications = [];

    for (const adminNotification of adminNotifications) {
      if (adminNotification.see === 0) {
        notifications.push({
          msg: adminNotification.msg,
          _id: adminNotification._id,
        });
      }
    }

    return res.json({ ...req.user, courses, notifications });
  } catch (error) {
    next(error);
  }
};
