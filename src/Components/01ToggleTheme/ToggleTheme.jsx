import React, { useEffect, useState } from 'react';
import { BsFillMoonStarsFill } from "react-icons/bs";


import "./ToggleTheme.scss";
import { BsFillSunFill } from "react-icons/bs";



const ToggleTheme = () => {
    const savedTheme = localStorage.getItem("selectedTheme");
    const [theme, setTheme] = useState(savedTheme || 'light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        document.body.className = theme
        localStorage.setItem("selectedTheme", theme)
    }, [theme])

    return (
        <>

            <button onClick={toggleTheme}>
                {theme === 'light' ? <BsFillMoonStarsFill className="icon" /> : <BsFillSunFill className="icon" />}
            </button>

        </>
    )
}

export default ToggleTheme;


// import { BsFillMoonStarsFill } from "react-icons/bs";
// <BsFillMoonStarsFill />

// import { WiDaySunnyOvercast } from "react-icons/wi";
// <WiDaySunnyOvercast />

// import { GrSun } from "react-icons/gr";
// <GrSun />
