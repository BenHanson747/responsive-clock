
import React, { useEffect, useState } from "react";

function ClockText () {

     let date = new Date();
     let hh = date.getHours();
     let ampm;
     let mm = date.getMinutes();
     let ss = date.getSeconds();

     if(hh >= 12){
        hh = hh - 12
        ampm = 'PM'
    }   else{
        ampm = 'AM'
    }

    if(hh === 0){hh = 12}
    if(hh < 10){hh = `0${hh}`}
    if(mm < 10){mm = `0${mm}`}
    if(ss < 10){ss = `0${ss}`}

    const [seconds, setSeconds] = useState(ss);

    useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);
    }, 1000);
    return () => clearInterval(timer);
  });

    return (
            <div className="clock__text">
                <div className="clock__text-hour">{hh}:</div>
                <div className="clock__text-minutes">{mm}</div>
                <div className="clock__text-seconds">:{ss}</div>
                <div className="clock__text-ampm">{ampm}</div>
            </div>
    )
}
  export default ClockText; 