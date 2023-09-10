import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import { isError } from 'react-query'
const RQsuper = () => {
    const { isLoading,isError, error, data } = useQuery(['superheroes'], () =>{
      return  axios.get('http://localhost:4000/superheroes')
    })
    if(isLoading){
        return <h1>Loading..</h1>

    }
    if(isError){
        return <h1>{error.message}</h1>
    }


  return (
    <div>
        <h2>RQ superheroes</h2>
        {
            data.data.map((e)=>{
                return <div key={e.id}>{e.name}</div>
            })
        }
    </div>
  )
}

export default RQsuper