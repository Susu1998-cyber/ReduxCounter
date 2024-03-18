import React from 'react'
import { useSelector } from 'react-redux'

const ShowForm = () => {
   const {name,age} = useSelector((state) => state.form)
  return (
    <div style={{display:"flex", flexDirection:"column"}}>
        <p>Name:{name}</p>
        <p>Age:{age}</p>
    </div>
  )
}

export default ShowForm