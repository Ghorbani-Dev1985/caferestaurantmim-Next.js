const userModel = require("../../models/user");
const bcrypt = require("bcrypt");

exports.getAll = async (req, res, next) => {
  try {
    const users = await userModel.find();

    return res.json(users);
  } catch (error) {
    next(error);
  }
};

exports.editUser = async (req, res, next) => {
  try {
    const { name, username, email, password, phone, role } = req.body;
    const { id } = req.params;
    await userModel.editUserValidation({ ...req.body, id }).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const hashedPassword = password
      ? await bcrypt.hash(password, 12)
      : undefined;

    const updatedUser = await userModel.findByIdAndUpdate(
      id,
      {
        name,
        username,
        email,
        password: hashedPassword,
        phone,
        role,
      },
      { new: true }
    );

    return res.json({ user: updatedUser });
  } catch (error) {
    next(error);
  }
};

exports.removeUser = async (req, res, next) => {
  try {
    await userModel.removeUserValidation(req.params).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const deletedUser = await userModel.findOneAndRemove({
      _id: req.params.id,
    });

    if (!deletedUser) {
      return res.status(404).json("There is not user");
    }

    return res.status(200).json("User Deleted Successfully");
  } catch (error) {
    next(error);
  }
};


exports.getUserCourses = async (req, res, next) => {
  try {
    const userCourses = await courseUserModel
      .find({ user: req.user._id })
      .populate("course")
      .lean();

    res.json(userCourses);
  } catch (error) {
    next(error);
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    await userModel.updateUserValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const { name, username, email, password, phone } = req.body;

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await userModel.findOneAndUpdate(
      { _id: req.user._id },
      {
        name,
        username,
        email,
        password: hashedPassword,
        phone,
      }
    );

    return res.json(user);
  } catch (error) {
    next(error);
  }
};

exports.changeUserRole = async (req, res, next) => {
  try {
    await userModel.changeUserRoleValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const { role, id } = req.body;

    const user = await userModel.findByIdAndUpdate(
      { _id: id },
      {
        role: role,
      }
    );

    res.json({ msg: `User role changed to ${role} successfully` });
  } catch (error) {
    next(error);
  }
};
