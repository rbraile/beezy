import { SET_ORDER } from '../constants/ActionTypes'

export const setOrder = order => dispatch => {
  return dispatch({ type: SET_ORDER, payload: order })
}
