const contactModel = require("../../models/contact");
var nodemailer = require("nodemailer");

exports.create = async (req, res, next) => {
  try {
    await contactModel.createValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });
    const { name, phone, body } = req.body;
    
    const newcontact = await contactModel.create({
      name,
      phone,
      body,
    });

    return res.status(201).json({message : "پیام شما با موفقیت ثبت گردید و با شما تماس خواهیم گرفت" , newcontact})
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const allcontacts = await contactModel.find();
    res.json(allcontacts);
  } catch (error) {
    next(error);
  }
};

exports.asnwer = async (req, res, next) => {
  try {
    await contactModel.answerValidation(req.body).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const { email, answer } = req.body;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sabzlearnir@gmail.com",
        // pass: "h z v g l t m f l s y v z p h q",
        pass: "r t f p n x v q j x x o p x a o",
      },
    });

    var mailOptions = {
      from: "sabzlearnir@gmail.com",
      to: email,
      subject: "پاسخ پیغام شما از سمت  کافه رستوران میم",
      text: answer,
    };

    const contact = await contactModel.findOneAndUpdate(
      { email: email },
      {
        answer: 1,
      }
    );

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        res.json({ message: error });
      } else {
        res.json({ message: "Email sent succesfully :))" });
      }
    });
  } catch (error) {
    next(error);
  }
};


exports.asnwered = async (req, res, next) => {
  try {
    console.log(req.body.id)

    const answeredContact = await contactModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        answer: true,
      },
      { new: true }
    );
    if(!answeredContact){
      return res.status(404).json({message : "چنین پیامی یافت نگردید"})
    }
    res.json({ message: "تغییر وضعیت به درستی انجام گردید" , answeredContact});
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    await contactModel.removeValidation(req.params).catch((err) => {
      err.statusCode = 400;
      throw err;
    });
    const deletedContact = await contactModel.findOneAndRemove({
      _id: req.params.id,
    });
    if (!deletedContact) {
      return res.status(404).json({ message: "پیام مورد نظر یافت نگردید" });
    }
    return res.json(deletedContact);
  } catch (error) {
    next(error);
  }
};
