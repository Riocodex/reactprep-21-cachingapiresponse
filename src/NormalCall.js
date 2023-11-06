import React from 'react'
import { useEffect, useState } from 'react';


export const NormalCall = () => {
    const URL = "https://jsonplaceholder.typicode.com/albums";
    

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true)
  
    const getData = async()=>{
      const result = await fetch(URL);
      result.json().then(json=>{
        setData(json);
        setLoading(false)
      })
    }

    useEffect(()=>{
        getData()
      },[])

      if (loading) return <h1>Loading....</h1>
  return (
    <div>
        
        {data.map((item)=>(
        <div key={item.id}>
          <p >{item.id}. {item?.title}</p>
        </div>
      ))}
    </div>
  )
}
