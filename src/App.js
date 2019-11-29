import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";
import Header from './Header';
import JournalForm from './JournalForm';
import ExerciseAllData from './ExerciseAllData';
// import Entry from './Entry';

class App extends Component {
  constructor() {
    super();
    this.state = {
      journal: [],
      date: '',
      // exercise: '',
      // sets: 0,
      // reps: 0,
      // weights: 0,
    };
  }


  componentDidMount() {
    // connect App to Firebase in componentDidMount
    const dbRef = firebase.database().ref();

    // listen on the dbref for when the value of the database changes
    dbRef.on("value", snapshot => {
      const entries = snapshot.val();
      console.log(entries);
    })
  }




  // inputValidation = () => {

  //   if (
  //     this.state.date === '' ||
  //     this.state.exercise === '' ||
  //     this.state.sets === 0 ||
  //     this.state.reps === 0

  //   )
  //     return false;

  //   else {
  //     return true;
  //   }
  // };

  handleClick = (event) => {
    event.preventDefault();
    console.log('i was clicked')


  }





  render() {
    return (
      <div className='wrapper'>
        <Header />
        <JournalForm
          date={this.state.date}
          handleChange={this.handleChange}
          handleClick={this.handleClick}
          handleAddMore={this.handleAddMore}
          exercise={this.state.exercise}
          sets={this.state.sets}
          reps={this.state.reps}
          weights={this.state.weights}
        />

      </div>
    );
  }

}

export default App;
