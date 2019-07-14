import { SET_ORDER } from '../constants/ActionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...action.payload,
      }

    default:
      return state
  }
}

export default reducer
