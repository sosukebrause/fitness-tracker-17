const router = require("express").Router();

const {
  getWorkout,
  addExercise,
  newWorkout,
  deleteWorkout,
} = require("../controllers/workout-controller");

router.get("/api/workouts", getWorkout);
router.put("/api/workouts/:id", addExercise);
router.post("/api/workouts", newWorkout);
router.delete("/api/workouts", deleteWorkout);

router.get("/api/workouts/range", getWorkout);

module.exports = router;
