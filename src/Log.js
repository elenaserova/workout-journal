import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import uuidv4 from 'uuid';

function Log(props) {
    return(
      < div className='log' >
        <p>Date: {props.dailyLog.entry[0][0]}</p>

        {
          props.dailyLog.entry[0][1].map((activity) => {
            return (
              <ul key={uuidv4()}>
                <li><FontAwesomeIcon icon={faCheck} /><span className="highliteEx">{activity.exercise}</span><span className="highlite"> {activity.sets} </span > sets <span className="highlite">{activity.reps}</span> reps <span className="highlite">{activity.weights}</span> lb</li>
              </ul>
            )
          })
        }
        <button onClick={props.removeEntry} id={props.dailyLog.entryId}> Delete Log</button>
      </div>
    )
  }

export default Log