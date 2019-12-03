import lodashGet from 'lodash/get';

export const getWidgets = (state) => lodashGet(state, 'widgets', []);
