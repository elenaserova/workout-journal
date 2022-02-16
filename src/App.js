import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";
import Header from './Header';
import JournalForm from './JournalForm';
import Log from './Log';
import Footer from './Footer';
import uuidv4 from 'uuid';



class App extends Component {
  constructor() {
    super();
    this.state = {
      journal: [],
      log: [],
      valid: false
    };
  }


  componentDidMount() {
    // connect App to Firebase in componentDidMount
    const dbRef = firebase.database().ref();

    // listen on the dbref for when the value of the database changes
    dbRef.on("value", snapshot => {
      const logs = snapshot.val();
      const newEntries = [];
      for (let key in logs) {
        const individualEntryObject = {
          entryId: key,
          entry: logs[key]
        }
        newEntries.unshift(individualEntryObject);
      }

      this.setState({
        journal: newEntries
      });


    })
  }


  handleClick = (event, date, lines) => {
    event.preventDefault();
    const totalLog = [];
    totalLog.push(date);
    totalLog.push(lines);
    this.setState({
      log: totalLog
    })

    const newLogToBeAdded = [];
    newLogToBeAdded.push(totalLog);
    //save to firebise
    const dbRef = firebase.database().ref();
    dbRef.push(newLogToBeAdded)
    alert('Good job!💪 You log has been successfully added!')
  }


  removeEntry = (event) => {
    const question = window.confirm("Are you sure?");
    if (question === true) {
      const dbRef = firebase.database().ref();
      dbRef.child(event.target.id).remove();
    } else {
      return
    }
  }


  render() {
    return (
      <div>
        <div className='wrapper'>
          <Header />
          <JournalForm
            handleClick={this.handleClick}
          />
          <div className="logsContainer">
            {this.state.journal.map((dailyLog, i) => {
              return (
                <Log key={uuidv4()} dailyLog={dailyLog} removeEntry={this.removeEntry}/>
              )
            })}
          </div>
        </div >
        <Footer />
      </div>

    );
  }

}

export default App;