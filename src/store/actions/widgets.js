import * as constants from '../constants';

export const addForecastWidget = (forecast) => ({
  type: constants.ADD_WIDGET,
  payload: forecast
});

export const removeForecastWidget = (id) => ({
  type: constants.REMOVE_WIDGET,
  payload: id
});

export const filterForecastWidgets = (temperature) => ({
  type: constants.CHANGE_FILTER,
  payload: temperature
});
