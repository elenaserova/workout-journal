import React, { Component } from 'react';
import Test from "./ExerciseAllDataTest";
class JournalForm extends Component {
  constructor() {
    super()
    this.state = {
      date: {},
      log: [],
      lines: [{
        exercise: '',
        sets: 0,
        reps: 0,
        weights: 0,
      },],
      validInput: true
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
    console.log(event.target.name);
    console.log(event.target.value);
    const newLine = [...this.state.lines];
    newLine[i][event.target.name] = event.target.value
    console.log(this.state.lines)
    console.log(newLine)
    console.log(newLine[i])

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
      this.state.date === '' ||
      this.state.lines.exercise === '' ||
      this.state.lines.sets === 0 ||
      this.state.lines.reps === 0
    ) {
      return false

    } else {

      this.setState({
        validInput: true

      })

    }
    console.log(this.state.date);
    console.log(this.state.lines.exercise);
    console.log(this.state.lines.reps);
    console.log(this.state.lines.sets);

  }


  handleAddMore = (event) => {
    event.preventDefault();
    console.log('i was clicked as well');
    this.inputValidation();
    console.log(this.state.validInput)
    if (this.state.validInput === true) {

      this.pushNewLine();
      this.allDataToLog();

    } else {
      alert('You forgot something...please check your entry!')
    }
    // const lineToBeSaved = this.state.lines;
    // this.state.log.push(lineToBeSaved);
    // console.log(lineToBeSaved);
    // console.log(this.state.log);
    console.log(this.state.lines)

  }

  allDataToLog = () => {
    const totalLog = [];
    totalLog.push(this.state.date);
    this.state.lines.map((line) => {
      totalLog.push(line)
    })
    console.log(totalLog);
    this.setState({
      log: totalLog

    })

  }





  render() {
    return (
      <div className='journal' id="journal">
        <form action='submit'>
          <label htmlFor='date' className='date'>Date:</label>
          <input type='date' name='date' onChange={this.handleDateChange} value={this.date} />



          {this.state.lines.map((line, i) => {
            return (
              <Test
                handleChange={(event) => { this.handleChange(event, i) }}
                exercise={this.state.lines[i].exercise}
                sets={this.state.lines[i].sets}
                reps={this.state.lines[i].reps}
                weights={this.state.lines[i].weights} />
            )
          })}

          <button onClick={(event) => { this.handleAddMore(event) }}>Add more exercises</button>

          <button onClick={(event) => this.props.handleClick(event, this.state.log)}>Log workout</button>



        </form>

      </div>
    )
  }
}


export default JournalForm