import React,{useEffect, useState} from 'react';
import requests from '../requests';
import axios from 'axios';

function Main() {
  const [movies,setMovies] = useState([])



  useEffect(()=>{
    axios.get(requests.requestPopular).then((Response)=>{
      setMovies(Response.data)

    })
  },[])
  console.log(movies)


  return (
    <div>

    </div>
  )
}

export default Main