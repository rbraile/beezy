import { SUCCESS_SEARCH } from '../constants/ActionTypes'

const initialState = {}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SUCCESS_SEARCH:
      return {
        ...state,
        value: action.payload,
      }

    default:
      return state
  }
}

export default reducer
