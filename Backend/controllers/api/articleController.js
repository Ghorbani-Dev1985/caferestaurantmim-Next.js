const fs = require("fs");
const path = require("path");

const articleModel = require("../../models/article");

exports.create = async (req, res, next) => {
  try {
    const { title, description, body, shortName } = req.body;
    const cover = req.file;
    await articleModel.validation({ ...req.body, cover }).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const duplicatedShortname = await articleModel.findOne({ shortName });
    if (duplicatedShortname) {
      return res.status(401).json({ message: "لینک وارد شده تکراری می باشد" });
    }

    const article = await articleModel.create({
      title,
      description,
      shortName,
      body,
      creator: req.user._id,
      cover: req.file.filename,
    });

    const populatedArticle = await article.populate("creator", "-password");

    return res.status(201).json(populatedArticle);
  } catch (error) {
    next(error);
  }
};

exports.saveDraft = async (req, res, next) => {
  try {
    const { title, description, body, shortName } = req.body;

    const duplicatedShortname = await articleModel.findOne({ shortName });
    if (duplicatedShortname) {
      return res.status(401).json({ message: "لینک وارد شده تکراری می باشد" });
    }

    const cover = req.file;
    console.log(cover);
    await articleModel.validation({ ...req.body, cover }).catch((err) => {
      err.statusCode = 400;
      throw err;
    });

    const article = await articleModel.create({
      title,
      description,
      shortName,
      body,
      creator: req.user._id,
      cover: req.file.filename,
    });

    const draftedArticle = await article.populate("creator", "-password");

    return res
      .status(201)
      .json({ message: "مقاله با موفقیت ثبت شد", draftedArticle });
  } catch (error) {
    next(error);
  }
};

exports.publishedArticle = async (req, res, next) => {
  console.log(req.body.id);
  try {
    const findUnpublish = await articleModel.findOneAndUpdate(
      { _id: req.body.id },
      {
        publish: true,
      },
      { new: true }
    );

    if (!findUnpublish) {
      return res.status(404).json({ message: "چنین مقاله ای یافت نگردید" });
    }

    res.json({ message: "مقاله مورد نظر منتشر شد", findUnpublish });
  } catch (error) {
    next(error);
  }
};

exports.getAll = async (req, res, next) => {
  try {
    const articles = await articleModel
      .find()
      .populate("creator", "-password")
      .sort({ _id: -1 });

    if (articles.length === 0) {
      return res.status(404).json({ message: "مقاله ای موجود نمی باشد" });
    }

    return res.json(articles);
  } catch (error) {
    next(error);
  }
};

exports.getOne = async (req, res, next) => {
  try {
    const article = await articleModel
      .findOne({ shortName: req.params.shortName })
      .populate("creator", "-password")
      .lean();

    if (!article) {
      return res.status(404).json({ message: "چنین مقاله ای یافت نگردید" });
    }

    res.json(article);
  } catch (error) {
    next(error);
  }
};

exports.remove = async (req, res, next) => {
  try {
    const deletedArticle = await articleModel.findOneAndRemove({
      _id: req.params.id,
    });
    if (!deletedArticle) {
      return res.status(404).json({ message: "مقاله مورد نظر یافت نگردید" });
    }

    const imgPath = path.join(
      __dirname,
      "..",
      "..",
      "public",
      "courses",
      "covers",
      deletedArticle.cover
    );
    fs.unlink(imgPath, async (err) => {
      if (err) {
        console.log(err);
      }
    });

    return res.json({
      message: "مقاله مورد نظر با موفقیت حذف شد",
      deletedArticle,
    });
  } catch (error) {
    next(error);
  }
};
