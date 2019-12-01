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

  pushNewLine = () => {
    const newLine = [...this.state.lines];
    newLine.push({})
    this.setState({
      lines: newLine
    })

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
    console.log('you changed it', event.target.value)
    this.setState({
      date: event.target.value

    })
  }

  inputValidation = () => {

    if (
      this.state.date !== ''
      // this.state.lines[i].exercise === '' ||
      // this.state.lines[i].sets === 0 ||
      // this.state.lines[i].reps === 0
    ) {
      this.setState({
        validInput: true

      })
    } else {
      this.setState({
        validInput: false

      })
    }
    console.log(this.state.date)
    console.log(this.state.validInput)
  }




  handleAddMore = (event) => {
    event.preventDefault();
    this.inputValidation();
    if (this.state.validInput === true) {

      this.pushNewLine();


    } else {
      alert('You forgot something...please check your entry!')
      return
    }


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
                handleChange={(event) => { this.handleChange(event, i) }}
                exercise={this.state.lines[i].exercise}
                sets={this.state.lines[i].sets}
                reps={this.state.lines[i].reps}
                weights={this.state.lines[i].weights} />
            )
          })}

          <button onClick={(event) => { this.handleAddMore(event) }}>Add more exercises</button>

          <button onClick={(event) => {
            this.props.handleClick(event, this.state.date, this.state.lines);
            this.setState(prevState => ({
              date: '',
              lines: [{
                exercise: '',
                sets: 0,
                reps: 0,
                weights: 0,
              },],
              validInput: true

            }))
          }
          }>Log workout</button>



        </form>

      </div>
    )
  }
}


export default JournalForm