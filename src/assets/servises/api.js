import axios from 'axios';
import { get } from 'lodash';

const accsesKey = '0e893d00715b51fc0b7b490dda78c97b';

const token =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg5M2QwMDcxNWI1MWZjMGI3YjQ5MGRkYTc4Yzk3YiIsInN1YiI6IjY2NDFkOWViNTQ3OTcwMDYxOWZiNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCbUpgqC3zsJYrjqA4Pefevu2yysXzSAMJPb_RoiH3c';
const accauntId = '21266810';
('https://api.themoviedb.org/3/movie/157336?api_key=0e893d00715b51fc0b7b490dda78c97b');
('https://api.themoviedb.org/3/movie/157336/videos?api_key=0e893d00715b51fc0b7b490dda78c97b');

//options.headers

//searchOptions.headers

export const getMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg5M2QwMDcxNWI1MWZjMGI3YjQ5MGRkYTc4Yzk3YiIsInN1YiI6IjY2NDFkOWViNTQ3OTcwMDYxOWZiNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCbUpgqC3zsJYrjqA4Pefevu2yysXzSAMJPb_RoiH3c',
    },
  };
  const response = await axios.request(options);
  return response.data.results;
};

export const trendingMovies = async () => {
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg5M2QwMDcxNWI1MWZjMGI3YjQ5MGRkYTc4Yzk3YiIsInN1YiI6IjY2NDFkOWViNTQ3OTcwMDYxOWZiNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCbUpgqC3zsJYrjqA4Pefevu2yysXzSAMJPb_RoiH3c',
    },
  };

  const res = await axios.request(options);
  console.log(res.data.results);
  return res.data.results;
};

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZTg5M2QwMDcxNWI1MWZjMGI3YjQ5MGRkYTc4Yzk3YiIsInN1YiI6IjY2NDFkOWViNTQ3OTcwMDYxOWZiNDkzNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JCbUpgqC3zsJYrjqA4Pefevu2yysXzSAMJPb_RoiH3c',
  },
});
export const getMoviesById = async id => {
  const response = await instance.get(`movie/${id}`);
  return response.data;
};

export const getMovieCast1 = async id => {
  const response = await instance.get(`movie/${id}/credits`);
  return response.data.cast;
};

export const getMovieCast = async pathname => {
  const response = await instance.get(pathname);
  return response.data.cast;
};

export const getMovieReviews = async id => {
  const response = await instance.get(`movie/${id}/reviews`);
  return response.data.results;
};
