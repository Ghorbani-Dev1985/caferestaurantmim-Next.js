const express = require("express");

const controller = require("../../controllers/api/contact");
const authenticatedMiddleware = require("../../middlewares/authenticated");
const isAdminMiddleware = require("../../middlewares/isAdmin");

const router = express.Router();

router.route("/").get(controller.getAll).post(controller.create);
router
  .route("/:id")
  .delete(authenticatedMiddleware, isAdminMiddleware, controller.remove);

router
  .route("/answer")
  .post(authenticatedMiddleware, isAdminMiddleware, controller.asnwer);

  router
  .route("/answered")
  .put(authenticatedMiddleware, isAdminMiddleware, controller.asnwered);

module.exports = router;
