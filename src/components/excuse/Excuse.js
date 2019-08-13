import React from 'react';
import './Excuse.css';
import BorderWrapper from 'react-border-wrapper';

const sampleExcuse = "Need to drive my sister to the doctors";
const topElement = <div className="excuse-tab">Excuse</div>;

function Excuse() {
  return (
    <div>
      <article id="excuse-container" >
        {/* <BorderWrapper borderWidth="3px" borderRadius="6px"
        topElement={topElement} topPosition={-0.55} topOffset="18px"
        topGap="0px"> */}
        <p>{ sampleExcuse }</p>
        {/* </BorderWrapper> */}
      </article>
      <button className="button-excuse">Medical</button>
      <button className="button-excuse">Social</button>
      <button className="button-excuse">Family</button> 
    </div>
  );
}

export default Excuse;