import React, { useEffect, useState } from "react";

function ClockHands() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * 6;
  const ss = date.getSeconds() * 6;

  return (
    <>
      <div
        className="clock__seconds"
        style={{ transform: `rotate(${ss}deg)` }}
      ></div>
      <div
        className="clock__minutes"
        style={{ transform: `rotate(${mm}deg)` }}
      ></div>
      <div
        className="clock__hour"
        style={{ transform: `rotateZ(${hh + mm / 12}deg)` }}
      ></div>
    </>
  );
}

export default ClockHands;
