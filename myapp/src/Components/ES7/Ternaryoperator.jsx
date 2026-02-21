import React from 'react'

export default function Ternaryoperator() {
    const score = 6;
  return (
    // <div>
    //   {score>=80? <span style={{color:"green"}}>'GRAD A'</span>:
    //   score>=70? <span style={{color:"yellow"}}>'GRAD B'</span>:
    //   score>=40? <span style={{color:"blue"}}>'GRAD C'</span>:<span style={{color:"red"}}>'GRAD F'</span>}

    
      <div style={score>=80? {backgroundColor:"green",color:"black"}
      :score>=70? {backgroundColor:"yellow",color:"black"}
      :score>=40? {backgroundColor:"blue",color:"black"}
      :{backgroundColor:"red",color:"black"}}>
        {
          score>=80?'GRADE A':
          score>=70?'GRADE B':
          score>=40?'GRADE C': 'GRADE F'
        } 
    </div>
  )
}
