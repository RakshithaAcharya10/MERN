import React from 'react'
import { name } from './exportmodule'
import { age } from './exportmodule'

export default function Importmodule() {
  return (
    <div>
      My name is { name}, im {age} years old
    </div>
  )
}
