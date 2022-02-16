import React from 'react';

function ExerciseAllData(props) {
    return (
      <div>
        <label htmlFor='exercise' aria-label="Exercise" className="visuallyHidden" ></label>
        <input
          type='text'
          name='exercise'
          required
          onChange={props.handleChange}
          value={props.exercise || ''}
          className="large"
        />

        <input
          type='number'
          min="1"
          name='sets'
          required
          onChange={props.handleChange}
          value={props.sets || ''}
          className="small"
        />
        <label htmlFor='sets'>sets</label>

        <input
          type='number'
          min="1"
          name='reps'
          required
          onChange={props.handleChange}
          value={props.reps || ''}
          className="small"
        />
        <label htmlFor='reps'>reps</label>

        <input
          type='number'
          min="0"
          name='weights'
          onChange={props.handleChange}
          value={props.weights || ''}
          className="small"
        />
        <label htmlFor='weights'>lb</label>
        <button onClick={props.removeLine} className="btnRemove">Remove</button>
      </div>
    )
  }

export default ExerciseAllData;
