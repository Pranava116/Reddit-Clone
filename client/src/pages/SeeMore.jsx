import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
function SeeMore() {
  const [title , setTitle] = useState("")
    const {id} = useParams()
    async function getValues(){
      const response = await axios.put(`http://localhost:5000/main/${id}`)
      console.log(response)
      setTitle(response.data[0].title)
    }
    useEffect(() => {
      getValues()
    })
  
    
  return (
    <div className='main-seemore-wrapper'>
      <div className='seemore-wrapper'>
        <h1 className='seemore-title'>{title}</h1>
        <h3 className='seemore-desc'>dfngfjd</h3>
        <h2 className='seemore-date'>2024-11-4</h2>
        <h2 className='seemore-venue'>Bengaluru</h2>
      </div>
    </div>
  )
}

export default SeeMore
