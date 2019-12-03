import axios from 'axios';
import * as globals from '../constants';

export const fetchForecastByCity = (query) =>
  axios.get(
    `${globals.API}?q=${query}&lang=ru&units=metric&appid=${globals.API_KEY}`,
    {
      validateStatus: (status) => status < 500
    }
  );
