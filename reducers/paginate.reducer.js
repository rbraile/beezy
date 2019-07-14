import { SET_SELECTED_PAGE } from '../constants/ActionTypes'

const initialState = {
  selectedPage: 1,
}

export default (state = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case SET_SELECTED_PAGE:
      return {
        ...state,
        selectedPage: payload.selectedPage,
      }
    default:
      return state
  }
}
