import { configureStore } from '@reduxjs/toolkit';
import { logger } from './store/middleware/logger';
import { movieApi } from './store/servises/movieApi';
import { reviewsApi } from './store/servises/reviewsApi';
import { cartReducer } from './store/features/cart';

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    [reviewsApi.reducerPath]: reviewsApi.reducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([movieApi.middleware, reviewsApi.middleware, logger]),
  devTools: process.env.NODE_ENV !== 'production',
});
