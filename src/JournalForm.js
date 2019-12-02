import React, { Component } from 'react';
import ExerciseAllData from "./ExerciseAllData";
import uuidv4 from 'uuid';

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
      },]
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
    console.log(newLine[i][event.target.name])
    console.log(event.target.value)


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

    this.state.lines.forEach((line) => {

      if (

        this.state.date !== '' &&
        line.exercise &&
        line.sets > 0 &&
        line.reps > 0

      ) {
        this.pushNewLine();

      }
      else {
        alert('You forgot something..please check your entry!')
        return

      }

    })

  }

  // if (
  //   this.state.date !== '' ||
  //   // this.state.lines.exercise !== '' ||
  //   // this.state.lines.sets !== 0 ||
  //   // this.state.lines.reps !== 0

  // ) {
  //   this.pushNewLine();
  // }
  // else {

  //   alert('You forgot something...please check your entry!')
  //   return
  // }
  // console.log(this.state.lines.exercise.target.value)



  handleAddMore = (event) => {
    event.preventDefault();
    this.inputValidation();

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
                key={uuidv4()}
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
              },]

            }))
          }
          }>Log workout</button>



        </form>

      </div>
    )
  }
}


export default JournalForm