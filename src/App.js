import React, { useState } from 'react';
import WorkoutForm from './component/WorkoutForm';
import WorkoutList from './component/WorkoutList';
import './App.css'


function App() {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <div className="App"> <center>
      <h1 style="color:blue;">Workout Tracker</h1></center>
      <WorkoutForm addWorkout={addWorkout} />
      <WorkoutList workouts={workouts} />
    </div>
  );
}

export default App;
