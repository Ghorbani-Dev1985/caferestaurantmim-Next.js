const path = require("path");
const express = require("express");
const { setHeaders } = require("./middlewares/headers");
const { errorHandler } = require("./middlewares/errors");

//*routes import
const usersRoutes = require("./routes/api/user");
const articlesRoutes = require("./routes/api/article");
const authRoutes = require("./routes/api/auth");
const contactRoutes = require("./routes/api/contact");
const searchRoutes = require("./routes/api/search");
const ordersRoutes = require("./routes/api/order");

const app = express();

//* BodyPaser
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));

//* CORS Policy Definitions
app.use(setHeaders);

//* Static Folder
app.use(express.static(path.join(__dirname, "public")));


//* Routes
app.use("/api/articles", articlesRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/orders", ordersRoutes);
app.use("/api/search", searchRoutes);
app.use("/api/users", usersRoutes);

//* Error Controller
app.use((req, res) => {
  console.log("this path is not available:", req.path);
  res.status(404).json({ message: "404 OOPS! PATH NOT FOUND" });
});
app.use(errorHandler);

module.exports = app;
