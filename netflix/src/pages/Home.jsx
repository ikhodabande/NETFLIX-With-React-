import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../requests';


function Home() {
  
  return (
    <>
    <Main/>
    <Row rowId='1' title='UpComming' fetchURL={requests.requestUpcoming}/>                
    <Row rowId='2' title='Trending' fetchURL={requests.requestTrending}/>                
    <Row rowId='3' title='Popular' fetchURL={requests.requestPopular}/>                
    <Row rowId='4' title='Favorite' fetchURL={requests.requestFavorite}/>                
    <Row rowId='5' title='Horror' fetchURL={requests.requestHorror}/>                
    </>
  )
}

export default Home