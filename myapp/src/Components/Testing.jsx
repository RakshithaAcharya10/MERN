import React from 'react'

export default function Firstapp() {
    const mystyle = {
        color:'yellow',
        backgroundColor:'pink'
    }

  return (
    <div>

      <h3 style={{color:"red", border:'2px blue dotted'}}>INLINE CSS</h3>

      <h4 style={mystyle}>INTERNAL CSS</h4>
    </div>
  )
}
