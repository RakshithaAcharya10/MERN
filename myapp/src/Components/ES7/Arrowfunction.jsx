import Button from '@mui/material/Button'
import React from 'react'

export default function Arrowfunction() {

    // 1.Normal function

    function Myfunction() {
        return (
            <h3>Normal function</h3>
        )
    }

    // 2.Arrow function

    const Arrow = () => {
        return (
            <>
                <h3>Arrow function using multiple statement</h3>
                <h5>hello</h5>
            </>
        )
    }

    // 3.Arrow function with single statement
    const Singlearrow = () => <h3>Arrow function with single statement</h3>

    const Handleclick = () => alert("button clicked!!!!")

    const Handlegreet = (name) =>alert("HELLO" +name)

    return (
        <div>
            <Myfunction />
            <Arrow />
            <Singlearrow />
            <Button variant='contained' onClick={Handleclick}>CLICK ME</Button>
            <Button variant='outlined' onClick={() => console.log("HELLO GOOD EVENING")}>GREET</Button>
            <Button onClick={()=>Handlegreet("Rakshitha")}>Passing arguments</Button>
        </div>
    )
}
