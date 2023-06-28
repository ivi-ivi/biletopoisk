import { AnyAction, Dispatch, Middleware } from 'redux';

export const logger: Middleware = (store) => (next: Dispatch<AnyAction>) => (action: AnyAction) => {
  console.log(action);
  next(action);
};
