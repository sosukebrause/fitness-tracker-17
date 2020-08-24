const db = require("../models/index");

module.exports = {
  getWorkout: (req, res) => {
    !req.query.id
      ? db.Workout.find({})
          .then((allWorkouts) => {
            res.send(allWorkouts);
          })
          .catch((err) => res.send(err))
      : db.Workout.find(req.query.id)
          .then((foundWorkout) => {
            res.send(foundWorkout);
          })
          .catch((err) => res.send(err));
  },
};
