import React from 'react';
import ClockHands from './components/ClockHands';
import DarkMode from './components/DarkMode';
import ClockText from './components/ClockText';
import ClockDate from './components/ClockDate';

function App() {
  return (
    <section className="clock container">
      <div className="clock__container grid">
        <div className="clock__content grid">
          <div className="clock__circle">
            <span className="clock__twelve"></span>
            <span className="clock__three"></span>
            <span className="clock__six"></span>
            <span className="clock__nine"></span>  
            <div className="clock__rounder"></div>
            <ClockHands />
            <DarkMode />
          </div>
        <div>
          <ClockText />
          <ClockDate />
        </div>
       </div>
      </div>
    </section>
  );
}

export default App;
