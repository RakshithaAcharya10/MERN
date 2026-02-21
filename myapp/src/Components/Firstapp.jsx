import React from 'react'
import './style.css'
import image1 from '../assets/img1.png'

export default function Firstapp() {
    const mystyle = {
        color:'yellow',
        backgroundColor:'pink'
    }

  return (
    <div>
      <h1>my new app</h1>

      <h3 style={{color:"red", border:'2px blue dotted'}}>INLINE CSS</h3>

      <h4 style={mystyle}>INTERNAL CSS</h4>
      <h5 className='myclass'>EXTERNAL CSS</h5>
      <img src={image1} alt="" height={200} width={200} />
    </div>
  )
}
