import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";
import Header from './Header';
import JournalForm from './JournalForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      journal: []
    };
  }


  componentDidMount() {
    // connect App to Firebase in componentDidMount
    const dbRef = firebase.database().ref();

    // listen on the dbref for when the value of the database changes
    dbRef.on("value", snapshot => {
      const logs = snapshot.val();
      console.log(logs);
      // const newEntry = [];
      // for (let key in entries) {
      //   newEntry.push({
      //     entryId: entries[key],
      //     entryDate: this.state.date,
      //     logContent: this.state.lines,

      //   });
      // }
      // this.setState({
      //   log: newEntry
      // });
    })
  }


  handleClick = (event, log) => {
    event.preventDefault();
    console.log('i was clicked')
    // i need to take all the objects from the array called "lines", add date object and save them to new array called log
    const newLogToBeAdded = [];
    newLogToBeAdded.push(log);
    this.setState({
      journal: newLogToBeAdded

    })
    console.log(newLogToBeAdded)
    console.log(log)
    console.log(this.state.journal)
    //save to firebise
    const dbRef = firebase.database().ref();
    dbRef.push(newLogToBeAdded)
    //then display on the page 
    // this.state.dbRef.push({


    // });


  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <JournalForm
          handleClick={this.handleClick}

        />

      </div>
    );
  }

}

export default App;
