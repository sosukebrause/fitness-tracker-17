const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: Date.now(),
  },
  totalDuration: {
    type: Number,
    default: 0,
  },
  exercises: ["subSchema"],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = { Workout };
