import React, { useState } from 'react'

export default function Theme() {

    const [darkMode, setDarkMode] = useState(false)

    const toggleTheme = () => {
        setDarkMode(!darkMode)

    }

    return (
        <div style={{ backgroundColor: darkMode ? "black" : "white", height: "100vh", display: "flex", alignItems: "center", justifyContent: 'center' }}>

            <button onClick={toggleTheme} style={{ padding: "10px", backgroundColor: darkMode ? "white" : "black", color: darkMode ? 'black' : 'white' }}>{darkMode ? "Light Mode" : "Dark Mode"}
            </button>
        </div>
    )
}
