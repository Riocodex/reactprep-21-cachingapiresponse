import React, {useState} from 'react'
import { useQuery } from 'react-query';
//so basically this cached call is just saved data from the normal call to prevent loading..when called again loading doesnt come out in cache because it has been called
export const CachedCall = () => {
    const {data , isLoading} = useQuery('data',()=>{
        const URL = "https://jsonplaceholder.typicode.com/albums"; 
        return fetch(URL)
           .then((response)=>response.json())
        
    })
    
    if (isLoading) return <h1>Loading....</h1>
  return (
    <div>
        <h2>CachedCall</h2>
        {data.map((item)=>(
        <div key={item.id}>
          <p >{item.id}. {item?.title}</p>
        </div>
      ))}
    </div>
  )
}
