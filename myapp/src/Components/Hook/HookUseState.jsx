import React, { useState } from 'react'

export default function HookUseState() {

    //syntax
    // const[state,setState] = useState()
    let favcolor = "red"

    const handlechange = () => {
        favcolor = "black"
        console.log(favcolor)
    }

    //Using useState
    const[color,setColor] = useState("black")

    const handlecolor = ()=> setColor("yellow")
     

    const[detail, setDetails] = useState({
        name: "RAKSHITHA",
        place: "MANGALORE",
        age: 24
    }
    )

    return (
        <div>
            <h3>My favourite color is {favcolor}</h3>
            <button onClick={handlechange}>change color</button>
            
            <h3>using useState</h3>
            <h3>My favourite color is {color}</h3>
            <button onClick={handlecolor}>change color</button>

            <h3>My name is {detail.name} from {detail.place} and my age is {detail.age}.</h3>
        </div>
    )
}
