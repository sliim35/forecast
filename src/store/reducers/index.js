import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets';

export const rootReducer = combineReducers({
  widgets: widgetsReducer
});
