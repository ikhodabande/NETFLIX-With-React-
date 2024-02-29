import React from 'react';
import Main from './Main';
import Row from '../components/Row';
import requests from '../requests';


function Home() {
  
  return (
    <>
    <Main/>
    <Row title='Up Comming' fetchURL={requests.requestUpcoming}/>                
    <Row title='Trending' fetchURL={requests.requestTrending}/>                
    <Row title='Popular' fetchURL={requests.requestPopular}/>                
    <Row title='Favorite' fetchURL={requests.requestFavorite}/>                
    <Row title='Horror' fetchURL={requests.requestHorror}/>                
    </>
  )
}

export default Home