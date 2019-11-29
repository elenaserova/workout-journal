import React, { Component } from 'react';
import Test from "./ExerciseAllDataTest";
class JournalForm extends Component {
  constructor() {
    super()
    this.state = {
      lines: [{
        exercise: '',
        sets: 0,
        reps: 0,
        weights: 0,
      },],
      // readyToGo: true
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

    // inputValidation = () => {

    //   if (
    //     this.state.lines[i].date === '' ||
    //     this.state.lines[].exercise === '' ||
    //     this.state.lines.sets === 0 ||
    //     this.state.lines.reps === 0

    //   )
    //     return false;

    //   else {
    //     return true;

    //   }
    // };



    const newLine = [...this.state.lines];

    newLine[i][event.target.name] = event.target.value
    console.log(this.state.lines)
    console.log(newLine)
    console.log(newLine[i])

    this.setState({
      lines: newLine
    })


  }

  handleAddMore = (event) => {
    event.preventDefault();
    console.log('i was clicked as well');
    this.pushNewLine();

  }




  render() {
    return (
      <div className='journal' id="journal">
        <form action='submit'>



          <label htmlFor='date' className='date'>
            Date:
					</label>

          <input type='date' name='date' onChange={this.props.handleChange} value={this.date} />
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

          <button onClick={this.props.handleClick}>Log workout</button>



        </form>

      </div>
    )
  }
}


export default JournalForm