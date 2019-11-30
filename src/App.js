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
    lines.map((line) => {
      totalLog.push(line)
    })
    console.log(lines);
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

  render() {
    return (
      <div className='wrapper'>
        <Header />
        <JournalForm
          handleClick={this.handleClick}

        />
        <div>
          {this.state.journal.map((dailyLog, i) => {
            console.log(dailyLog.entry[0][0])
            return (


              < div className='log' key={i} >
                <p>Date:{dailyLog.entry[0][0]}</p>
                {console.log(dailyLog.entry[0][0])}

                {
                  dailyLog.entry[0].map((activity) => {
                    return (

                      <div><p>Exercise:{activity.exercise} {activity.sets} sets {activity.reps} reps {activity.weights} lb</p>
                        {console.log(activity)}
                      </div>)
                  })
                }
              </div>
            )
          })}
        </div>

      </div >
    );
  }

}

export default App;
