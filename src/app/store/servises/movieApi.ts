import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Film } from '../../page';

export const movieApi = createApi({
  reducerPath: 'movie',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query<Film[], void>({ query: () => 'movies' }),
    getMovie: builder.query({ query: (movieId) => `movie?movieId=${movieId}` }),
  }),
});

export const { useGetMoviesQuery, useGetMovieQuery } = movieApi;
