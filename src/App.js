import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";
import Header from './Header';
import JournalForm from './JournalForm';


class App extends Component {
  constructor() {
    super();
    this.state = {
      journal: [],
      log: []
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
    console.log(newLogToBeAdded);
    console.log(totalLog)
    //save to firebise
    const dbRef = firebase.database().ref();
    dbRef.push(newLogToBeAdded)

  }

  removeEntry = (event) => {
    const question = window.confirm("Are you sure?");
    if (question == true) {
      const dbRef = firebase.database().ref();
      dbRef.child(event.target.id).remove();
    } else {
      return
    }





    console.log(event.target.id)
    // const dbRef = firebase.database().ref();
    // dbRef.child(event.target.id).remove();
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
            return (


              < div className='log' key={i} >
                <p>Date:{dailyLog.entry[0][0]}</p>

                {
                  dailyLog.entry[0][1].map((activity) => {
                    return (


                      <ul>
                        <li>Exercise:{activity.exercise} {activity.sets} sets {activity.reps} reps {activity.weights} lb</li>
                      </ul>
                    )
                  })
                }
                <button onClick={this.removeEntry} id={dailyLog.entryId}> Delete Log</button>
              </div>
            )
          })}
        </div>

      </div >
    );
  }

}

export default App;
