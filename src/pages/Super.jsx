import React, { useEffect } from 'react'
import { useState } from 'react';
import axios from 'axios';

const Super = () => {
    const [isLoading,setIsLoading]=useState(true);
    const [data,setData]=useState([]);

    useEffect(()=>{
        axios.get('http://localhost:4000/superheroes')
        .then((res)=>{
            setData(res.data);
            setIsLoading(false);
        })
       
        
    },[])
    

    if(isLoading){
        return <h1>Loading..</h1>
    }
  return (
    <div>
        <h2>Super Heroes</h2>
         {
            data.map((e)=>{
                return <div key={e.id}>{e.name}</div>
                
            })
        } 
        
         </div>
  )
}

export default Super