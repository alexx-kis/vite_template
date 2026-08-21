import { AppRoute } from './enums';

// %======================== const ========================% //

export const PREFIX = '';

export const BACKEND_URL = import.meta.env.VITE_API_PATH;
export const REQUEST_TIMEOUT = 5000;

export enum APIRoute {
  route = '/posts',
}

// %------------------------ routing ------------------------% //

export const PagesNames = {
  [AppRoute.HOME]: 'Главная',
};

// %------------------------ rendering ------------------------% //
