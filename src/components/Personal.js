import React from 'react'
import { useState } from 'react'

const Personal = () => {
  const [name,setName]=useState("")
  function handleName(e)
  {
    setName(e.target.value)
  }
  return (
    <div>
      <label for="name">Enter your name:</label>
      <input id="name" type="text" onChange={handleName} />
      {name && <p>Hello,{name}!</p>}
    </div>
  )
}

export default Personal
