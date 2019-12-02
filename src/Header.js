import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  return (
    <header>
      <div class="logo"><FontAwesomeIcon icon={faDumbbell} /></div>
      <h1>My Workout Log</h1>
      <p className="intro"> Track your fitness and strenght training progress, and change up your sets, reps, and weights.</p>
      <p className="subIntro"><span className="howTo">How to use:</span> List all exercises you did each time (make sure to log date, exercise, number of sets and reps; weights are optional) and then hit "Log Workout". New log would appear below. </p>
    </header>
  );
};

export default Header;