const router = require("express").Router();

const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
  getAllThoughts,
  getThoughtById,
  updateThought,
} = require("../../controllers/thoughts-controller");

router.route("/").get(getAllThoughts).post(addThought);

router
  .route("/:thoughtId")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = route;
