import {
  REQUEST_CHARACTER_LIST,
  SUCCESS_CHARACTER_LIST,
  ERROR_CHARACTER_LIST,
} from '../constants/ActionTypes'

import { getCharacterListService } from '../services'

export const getCharacterList = params => async dispatch => {
  dispatch({ type: REQUEST_CHARACTER_LIST })
  try {
    const res = await getCharacterListService(params)
    dispatch({ type: SUCCESS_CHARACTER_LIST, payload: res.data })
  } catch (err) {
    dispatch({ type: ERROR_CHARACTER_LIST, payload: err })
  }
}

// export const setDeliveries = data => ({
//   type: GET_DELIVERIES,
//   payload: data,
// })

// export const removeDelivery = id => dispatch => {
//   return dispatch({ type: REMOVE_DELIVERY, payload: id })
// }

// export const editDelivery = delivery => dispatch => {
//   return dispatch({ type: EDIT_DELIVERY, payload: delivery })
// }

// export const saveDelivery = delivery => dispatch => {
//   return dispatch({ type: SAVE_DELIVERY, payload: delivery })
// }
