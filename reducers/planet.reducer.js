import {
  REQUEST_CHARACTER_HOME,
  SUCCESS_CHARACTER_HOME,
  ERROR_CHARACTER_HOME,
} from '../constants/ActionTypes'

const initialState = {
  detail: {},
  loading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER_HOME:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SUCCESS_CHARACTER_HOME:
      return {
        ...state,
        detail: action.payload,
        loading: false,
        error: '',
      }

    case ERROR_CHARACTER_HOME:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default reducer
