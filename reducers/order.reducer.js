import { SET_ORDER, CLEAR_ORDER } from '../constants/ActionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...action.payload,
      }

    case CLEAR_ORDER:
      return {
        ...action.payload,
      }

    default:
      return state
  }
}

export default reducer
