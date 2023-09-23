import React, { useState } from 'react'

export default function Countbutton() {
  const [value,setValue]=useState(0);
  const Increment=()=>{
    setValue(value+1)
  }
  return (
    <div>
      <p>Count:{value}</p>
      <button onClick={Increment}>Click here</button>
    </div>
  )
  }