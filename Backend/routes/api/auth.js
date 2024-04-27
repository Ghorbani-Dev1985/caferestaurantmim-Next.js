const express = require("express");

const controller = require("../../controllers/api/auth");
const authenticatedMiddleware = require("../../middlewares/authenticated");

const router = express.Router();

router.post("/register", controller.register);
router.post("/login", controller.login);
router.get("/me", authenticatedMiddleware, controller.getMe);

module.exports = router;
