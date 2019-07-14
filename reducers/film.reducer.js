import {
  REQUEST_FILM_LIST,
  SUCCESS_FILM_LIST,
  ERROR_FILM_LIST,
} from '../constants/ActionTypes'

const initialState = {
  results: [],
  loading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_FILM_LIST:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SUCCESS_FILM_LIST:
      return {
        ...state,
        loading: false,
        error: '',
        ...action.payload,
      }

    case ERROR_FILM_LIST:
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
