const { Schema, model, Types } = require("mongoose");
const dateFormat = require("../utils/dateFormat");
const ReactionSchema = require("../models/reaction");

const ThoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      minLength: 1,
      maxLength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (createdAtVal) => dateFormat(createdAtVal),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [ReactionSchema],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);
ThoughtSchema.virtual("reactionCount").get(function () {
  return this.reactions.length;
});
const Thought = model("Thought", ThoughtSchema);
module.exports = Thought;
