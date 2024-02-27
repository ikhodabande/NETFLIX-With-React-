import React,{useEffect, useState} from 'react';
import requests from '../requests';
import axios from 'axios';

function Main() {
  const [movies,setMovies] = useState([])

  const movie = movies[Math.floor(Math.random() * movies.length)]



  useEffect(()=>{
    axios.get(requests.requestPopular).then((Response)=>{
      setMovies(Response.data.results)

    })
  },[])
  console.log(movie)


  return (
    <div className='w-full h-[550px] text-white'>
      <div className='w-full h-full'>
        <div className='absolute w-full h-full bg-gradient-to-r from-black'></div>
        <img className='w-full h-[550px]  object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />

      </div>

    </div>
  )
}

export default Main