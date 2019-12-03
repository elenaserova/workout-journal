import React, { Component } from 'react';
import ExerciseAllData from "./ExerciseAllData";

class JournalForm extends Component {
  constructor() {
    super()
    this.state = {
      date: '',
      lines: [{
        exercise: '',
        sets: 0,
        reps: 0,
        weights: 0,
      },],
      validInput: false
    }
  }



  handleChange = (event, i) => {
    event.preventDefault();
    const newLine = [...this.state.lines];
    newLine[i][event.target.name] = event.target.value


    this.setState({
      lines: newLine

    })
  }

  handleDateChange = (event) => {
    this.setState({
      date: event.target.value

    })
  }

  inputValidation = (event) => {
    event.preventDefault();
    const thing = event.target.id
    this.state.lines.forEach((line) => {
      if (

        this.state.date !== '' &&
        line.exercise &&
        line.sets > 0 &&
        line.reps > 0

      ) {

        this.setState({
          validInput: true

        }, () => {

          if (thing === "add") {
            this.pushNewLine();

          }

        });
      } else {
        this.setState({
          validInput: false

        }, () => {
          alert("You forgot something...please check your entry!");
          return
        })

      }

    })

  }

  pushNewLine() {

    if (this.state.validInput === true) {
      const newLine = [...this.state.lines];
      newLine.push({})
      this.setState({
        lines: newLine
      })
    }

  }


  handleAddMore = (event) => {
    event.preventDefault();
    this.inputValidation(event);
  }


  render() {
    return (
      <div className='journal' id="journal">
        <form action='submit'>
          <label htmlFor='date' className='date'>Date: </label>
          <input type='date' name='date' onChange={this.handleDateChange} value={this.state.date} />
          <p>Exercises:</p>
          {this.state.lines.map((line, i) => {
            return (
              <ExerciseAllData
                key={`line-${i}`}
                handleChange={(event) => { this.handleChange(event, i) }}
                exercise={this.state.lines[i].exercise}
                sets={this.state.lines[i].sets}
                reps={this.state.lines[i].reps}
                weights={this.state.lines[i].weights} />
            )
          })}

          <button id="add" onClick={(event) => { this.handleAddMore(event) }}>Add more exercises</button>

          <button id="submit" onClick={(event) => {
            this.inputValidation(event)
            if (this.state.validInput) {
              this.props.handleClick(event, this.state.date, this.state.lines);
              this.setState(prevState => ({
                date: '',
                lines: [{
                  exercise: '',
                  sets: 0,
                  reps: 0,
                  weights: 0,
                },],
                validInput: false
              }))

            }

          }
          }>Log workout</button>
        </form>
      </div>
    )
  }
}


export default JournalForm