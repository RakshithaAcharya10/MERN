import React from 'react'

export default function Destructuring() {
  const number =[1,2,3,4,5,6]
  const [a,b,c,d,e,f] = number
  const[,,,,g] = number
  const num4 = number[5]
  const Student = [{ name: "user", email: "user@gmail.com", phone: 7845568525, address: "Mangalore" }]
  const {name, email,phone, address} = Student[0]
  return (
    <div>
      {name}
    </div>
  )
}
