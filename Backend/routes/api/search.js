const express = require("express");
const controller = require("../../controllers/api/search");

const router = express.Router();

router.route("/:value").get(controller.get);

module.exports = router;
