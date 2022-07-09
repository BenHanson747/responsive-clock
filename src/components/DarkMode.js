import React, { useState } from "react";
import { useEffect } from "react";
import { BiMoon } from 'react-icons/bi';
import { FiSun } from 'react-icons/fi';

function DarkMode() {

   const [modeIcon , setModeIcon] = useState("false");
   const [darkTheme , setDarkTheme] = useState('');

   useEffect(() => {
       document.body.classList.toggle('dark-theme', darkTheme);
   },[darkTheme]
   
   )
   
   const darkModeToggle = () => {
       setModeIcon(!modeIcon);
       setDarkTheme(!darkTheme);
   }

return (
        <button className="clock__theme" onClick={darkModeToggle} aria-label = {modeIcon ? "Light Mode" : "Dark Mode"}>
            {modeIcon ? <BiMoon /> : <FiSun />}
        </button>
    )
}

export default DarkMode;