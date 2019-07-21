import { SET_ORDER, CLEAR_ORDER } from '../constants/ActionTypes'

export const setOrder = order => dispatch => {
  return dispatch({ type: SET_ORDER, payload: order })
}

export const clearOrder = () => dispatch => {
  return dispatch({ type: CLEAR_ORDER, payload: '' })
}
