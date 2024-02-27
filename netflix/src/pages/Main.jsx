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
        <img className='w-full h-full object-cover' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title} />
        <div className='absolute w-full top-[20%]'>
          <div>
            <button className='text-black border border-gray-300 bg-white px-5 py-2 ml-4'>Play</button>
            <button className='text-white border border-gray-300 py-2  px-5 ml-4'>Watch Later</button>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Main