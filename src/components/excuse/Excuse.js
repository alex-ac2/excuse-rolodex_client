import React, { useState } from 'react';
import './Excuse.css';
import { excuseList } from './excuse_db'; 

// import BorderWrapper from 'react-border-wrapper';
// const topElement = <div className="excuse-tab">Excuse</div>;

const sampleExcuse = "Need to drive my sister to the doctors";

function Excuse() {
  // Declare new state variable excuseCaption
  const [excuseCaption, setExcuse] = useState(sampleExcuse);
 
  const _handleButtonClick = (event) => {
    const category = event.target.name;
    console.log('CATEGORY: ', category);
    console.log(excuseList[category]);
    const listNum = Math.floor(Math.random() * Math.floor(excuseList[category].length));

    setExcuse(excuseList[category][listNum]);
  }

  return (
    <div>
      <article id="excuse-container" >
        <p>{ excuseCaption }</p>
      </article>
      <button name="medical" onClick={_handleButtonClick} className="button-excuse">Medical</button>
      <button name="social" onClick={_handleButtonClick} className="button-excuse">Social</button>
      <button name="family" onClick={_handleButtonClick} className="button-excuse">Family</button> 
    </div>
  );
}

export default Excuse;