const key = '626ce639dbecd1d8c4c8bd6b5c2bfcca';

const requests = {
  requestPopular : `https://api.themoviedb.org/3/account/21033253/popular/movies?api_key=${key}&language=en-US&page=1&sort_by=created_at.asc`,
  requestFavorite : `https://api.themoviedb.org/3/account/21033253/favorite/movies?api_key=${key}&language=en-US&page=1&sort_by=created_at.asc`,
  requestTrending : `https://api.themoviedb.org/3/account/21033253/popular/movies?api_key=${key}&language=en-US&page=2&sort_by=created_at.asc`,
  requestHorror : `https://api.themoviedb.org/3/account/21033253/search/movies?api_key=${key}&language=en-US&query=horror&page=1&sort_by=created_at.asc`,
  requestUpcoming : `https://api.themoviedb.org/3/account/21033253/upcoming/movies?api_key=${key}&language=en-US&page=1&sort_by=created_at.asc`,
  
};

export default requests;