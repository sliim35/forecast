import * as constants from '../constants';

export const widgetsReducer = (state = [], action) => {
  switch (action.type) {
    case constants.ADD_WIDGET:
      return [...state, action.payload];

    case constants.REMOVE_WIDGET:
      return state.filter((widget) => widget.id !== action.payload);

    case constants.CHANGE_FILTER:
      return [
        ...state.reduce(
          (acc, widget) =>
            widget.temperature > action.payload
              ? [...acc, { ...widget, hide: false }]
              : [...acc, { ...widget, hide: true }],
          []
        )
      ];

    default:
      return state;
  }
};
