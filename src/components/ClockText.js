import React, { useState, useEffect } from "react";

function ClockText() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hh = time.getHours() % 12 || 12;
  const mm = time.getMinutes().toString().padStart(2, "0");
  const ss = time.getSeconds().toString().padStart(2, "0");
  const ampm = time.getHours() >= 12 ? "PM" : "AM";

  return (
    <div className="clock__text">
      <div className="clock__text-hour">{hh}:</div>
      <div className="clock__text-minutes">{mm}</div>
      <div className="clock__text-seconds">:{ss}</div>
      <div className="clock__text-ampm">{ampm}</div>
    </div>
  );
}

export default ClockText;
