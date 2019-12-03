import { combineReducers } from 'redux';
import { widgetsReducer } from './widgets';
import { filteredWidgetsReducer } from './filteredWidgets';

export const rootReducer = combineReducers({
  widgets: widgetsReducer,
  filteredWidgets: filteredWidgetsReducer
});
