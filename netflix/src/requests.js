const key = '626ce639dbecd1d8c4c8bd6b5c2bfcca';

const requests = {
  requestPopular : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestFavorite :`https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending : `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror : `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
  requestUpcoming : `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  
};

export default requests;