import React, { useEffect, useState } from 'react'

export default function HookUseEffect() {
    //SYNTAX
    // useEffect(cb ,[])
    // cb = callback function
    // [] = dependency

    const[count, setCount]= useState(0)
    // useEffect(() =>{
    //     setCount((numcount)=> numcount+1)
    // },[])

    setTimeout(() =>{
        setCount((numcount)=> numcount+1)
    },5000)
    
  return (
    <div>
      <h3>I HAVE RENDERED {count} TIMES</h3>
    </div>
  )
}
