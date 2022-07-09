import React, { useEffect, useState } from "react";

function ClockHands() {

let date = new Date();
let hh = date.getHours() * 30;
let mm = date.getMinutes() * 6;
let ss = date.getSeconds() * 6;

const [seconds, setSeconds] = useState(ss);
const [minutes, setMinutes] = useState(mm);
const [hours, setHours] = useState(hh);

 useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
      setMinutes(minutes + 1);
      setHours(hours + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

    return (
    <>
        <div className="clock__seconds" style={{transform: `rotate(${ss}deg)`}}></div>
        <div className="clock__minutes" style={{transform: `rotate(${mm}deg)`}}></div>
        <div className="clock__hour" style={{transform: `rotateZ(${hh + mm / 12}deg)`}}></div>
    </>
    );
  }
  
  export default ClockHands;  