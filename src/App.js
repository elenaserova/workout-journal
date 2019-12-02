import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase.js";
import Header from './Header';
import JournalForm from './JournalForm';
import uuidv4 from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons'



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
    console.log(newLogToBeAdded);
    console.log(totalLog)
    //save to firebise
    const dbRef = firebase.database().ref();
    dbRef.push(newLogToBeAdded)


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
      <div className='wrapper'>
        <Header />
        <JournalForm
          handleClick={this.handleClick}

        />


        <div className="logsContainer">
          {this.state.journal.map((dailyLog, i) => {
            return (


              < div className='log' key={i} >
                <p>Date: {dailyLog.entry[0][0]}</p>

                {
                  dailyLog.entry[0][1].map((activity) => {
                    return (


                      <ul key={uuidv4()}>
                        <li><FontAwesomeIcon icon={faCheck} /><span className="highliteEx">{activity.exercise}</span><span className="highlite"> {activity.sets} </span > sets <span className="highlite">{activity.reps}</span> reps <span className="highlite">{activity.weights}</span> lb</li>
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
