import React, { Component } from 'react';

class ExerciseAllData extends Component {



  render() {
    return (
      <div>


        <label htmlFor='exercise'>-</label>
        <input
          type='text'
          name='exercise'
          placeholder="e.g. squats"
          required
          onChange={this.props.handleChange}
          value={this.props.exercise}
        />

        <input
          type='number'
          min="1"
          name='sets'
          required
          onChange={this.props.handleChange}
          value={this.props.sets}
        />
        <label htmlFor='sets'>sets</label>

        <input
          type='number'
          min="1"
          name='reps'
          required
          onChange={this.props.handleChange}
          value={this.props.reps}
        />
        <label htmlFor='reps'>reps</label>

        <input
          type='number'
          min="0"
          name='weights'
          value='0'
          onChange={this.props.handleChange}
          value={this.props.weights}
        />
        <label htmlFor='weights'>lb</label>
      </div>
    )
  }
}
export default ExerciseAllData;
