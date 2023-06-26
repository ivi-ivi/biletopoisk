import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const reviewsApi = createApi({
  reducerPath: 'reviews',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/api/' }),
  endpoints: (builder) => ({
    getReview: builder.query({ query: (movieId) => `reviews?movieId=${movieId}` }),
  }),
});

export const { useGetReviewQuery } = reviewsApi;
