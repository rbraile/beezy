import { 
  ADD_FILTER,
  CLEAR_FILTER
 } from '../constants/ActionTypes';

export const clearFilter = () => dispatch => {
  return dispatch({ type: CLEAR_FILTER, payload: '' });
}

export const addFilter = (filter) => dispatch => {
  return dispatch({ type: ADD_FILTER, payload: filter });
}

