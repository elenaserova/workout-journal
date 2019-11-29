import React from 'react';


const ExerciseAllData = (props) => {

  return (

    <div>

      <label htmlFor='exercise'>1.</label>
      <input
        type='text'
        name='exercise'
        placeholder="e.g. squats"
        required
        onChange={props.handleChange}
        value={props.exercise}
      />

      <input
        type='number'
        min="1"
        name='sets'
        required
        onChange={props.handleChange}
        value={props.sets}
      />
      <label htmlFor='sets'>sets</label>

      <input
        type='number'
        min="1"
        name='reps'
        required
        onChange={props.handleChange}
        value={props.reps}
      />
      <label htmlFor='reps'>reps</label>

      <input
        type='number'
        min="0"
        name='weights'
        onChange={props.handleChange}
        value={props.weights}
      />
      <label htmlFor='weights'>lb</label>
    </div>

  )
}


export default ExerciseAllData;