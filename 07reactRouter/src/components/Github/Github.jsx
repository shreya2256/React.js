import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'


function Github() {
    const data = useLoaderData()

    // const[data, setData] = useState([])
    // useEffect(() => {
    //     //here we have to fetch apis to get followers of github account with username shreya2256
    //   fetch('https://api.github.com/users/shreya2256')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)//calling setData here, and passing 'data' into it
    //   })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
      Github followers : {data.followers}
      <img src={data.avatar_url} alt="Git picture" width={300}/>
    </div>
  )
}

export default Github


export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/shreya2256')
    return response.json()
}