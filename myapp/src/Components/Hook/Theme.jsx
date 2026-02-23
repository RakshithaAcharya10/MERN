import React, { useState } from 'react'

export default function Theme() {

    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    const themeStyle = {
        backgroundColor: darkMode ? "black" : "white",
        color: darkMode ? "white" : "black",
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px"
    }

    return (
        <div style={themeStyle}>
            <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>

            <button onClick={toggleTheme}>
                Switch to {darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}