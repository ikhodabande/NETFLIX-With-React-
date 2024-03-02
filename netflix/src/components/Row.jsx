import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronLeft} from 'react-icons/md';



const Row = ({title, fetchURL}) => {
 const [movies,setMovies] = useState([])
 


 useEffect(()=>{
  axios.get(fetchURL).then((response) => {
    setMovies(response.data.results)
  })},[fetchURL])

 console.log(movies);




 const slideLeft = () =>{
 var slider = document.getElementById("slider");
 slider.scrollLeft = slider.scrollLeft - 500;
 };

 const slideRight = () =>{
  var slider = document.getElementById("slider");
  slider.scrollLeft = slider.scrollLeft + 500;
 };


  return (
    
    <>
      <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
    <div className='relative flex items-center group '>
      <MdChevronLeft 
      onClick={slideLeft}
      className='bg-white cursor-pointer rounded-full absolute left-0  opacity-50 hover:opacity-100 hidden group-hover:block z-10' size={40} />
       <div id={'slider'} className='w-full h-full overflow-x-scroll whitespace-nowrap scrollbar-hide scroll-smooth relative '>
        {movies.map((item,id) => (
          <Movie key={id} item={item}/>
        ))}
       </div>
       <MdChevronLeft 
       onClick={slideRight}
       className='bg-white cursor-pointer rounded-full absolute right-0 opacity-50 hover:opacity-100 hidden group-hover:block z-10 rotate-180' size={40} />
    </div>
    </>
     
    
  )
}

export default Row