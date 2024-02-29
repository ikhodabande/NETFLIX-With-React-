import axios from 'axios'
import React, { useEffect, useState } from 'react'
import requests from '../requests';

function Row() {
 const [movies,setMovies] = useState([])


 useEffect(()=>{
  axios.get(requests.requestPopular).then((response) => {
    setMovies(response.data.results);
  });
 },[]);


  return (
    <>
    <div className='w-full h-[550] text-white'>
      

    </div>

    </>
  )
}

export default Row