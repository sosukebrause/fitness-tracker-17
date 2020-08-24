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

  //create new workout to be added to db
  newWorkout: (req, res) => {
    db.Workout.create(req.body)
      .then((workout) => {
        res.send(workout);
      })
      .catch((err) => {
        res.json(err);
      });
  },

  // find the workout by its ID to access the exercises array
  addExercise: async (req, res) => {
    try {
      // set a variable to easily access the current workout
      const workout = await db.Workout.findById(req.params.id);
      //push new exercise to the workout.exercises array
      workout.exercises.push(req.body);
      // forEach loop accesses the duration of each exercise and adds them up
      let totalDuration = 0;
      await workout.exercises.forEach((exercise) => {
        totalDuration += exercise.duration;
      });

      // assign the variable to the object key's value
      workout.totalDuration = totalDuration;
      //save the workout with the newly added exercis
      await workout.save();
      //send response so the request does not hang up
      res.send(workout);
    } catch (err) {
      res.send(err);
    }
  },

  deleteWorkout: (req, res) =>
    db.Workout.findByIdAndDelete(req.query.id)
      .then(() => res.send({ msg: "Deleted workout" }))
      .catch((err) => res.send(err)),
};
