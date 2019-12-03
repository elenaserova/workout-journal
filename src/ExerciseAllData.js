import React, { Component } from 'react';


class ExerciseAllData extends Component {



  render() {
    return (
      <div>
        <label htmlFor='exercise' aria-label="Exercise" className="visuallyHidden" ></label>
        <input
          type='text'
          name='exercise'
          required
          onChange={this.props.handleChange}
          value={this.props.exercise}
          className="large"
        />

        <input
          type='number'
          min="1"
          name='sets'
          required
          onChange={this.props.handleChange}
          value={this.props.sets}
          className="small"
        />
        <label htmlFor='sets'>sets</label>

        <input
          type='number'
          min="1"
          name='reps'
          required
          onChange={this.props.handleChange}
          value={this.props.reps}
          className="small"
        />
        <label htmlFor='reps'>reps</label>

        <input
          type='number'
          min="0"
          name='weights'
          onChange={this.props.handleChange}
          value={this.props.weights}
          className="small"
        />
        <label htmlFor='weights'>lb</label>
      </div>
    )
  }
}
export default ExerciseAllData;
