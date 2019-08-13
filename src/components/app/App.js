import React from 'react';
import './App.css';
import Nav from '../header/nav/Nav';
import Excuse from '../excuse/Excuse';


function Main() {
  return (
    <main>
      <Excuse />
    </main>
  )
}


function App() {
  return (
    <div>
      <Nav />
      <Main />
    </div>
  );
}

export default App;
