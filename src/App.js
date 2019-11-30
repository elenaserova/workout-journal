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
      const newEntries = [];
      for (let key in logs) {
        const individualEntryObject = {
          entryId: key,
          entry: logs[key]
        }
        newEntries.push(individualEntryObject);
      }

      this.setState({
        journal: newEntries
      });


    })
  }


  handleClick = (event, log) => {
    event.preventDefault();
    const newLogToBeAdded = [];
    newLogToBeAdded.push(log);
    //save to firebise
    const dbRef = firebase.database().ref();
    dbRef.push(newLogToBeAdded)



  }

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <JournalForm
          handleClick={this.handleClick}

        />
        <div>
          {this.state.journal.map((dailyLog, i) => {
            console.log(dailyLog);
            //need to massage data to get access to all exercises
            return (<div className='log'><p key={i}>Date: {dailyLog.entry[0][0]}</p><p>Exercise:{dailyLog.entry[0][1].exercise} {dailyLog.entry[0][1].sets}{dailyLog.entry[0][1].reps}{dailyLog.entry[0][1].weights}</p></div>)
          })}
        </div>

      </div>
    );
  }

}

export default App;
