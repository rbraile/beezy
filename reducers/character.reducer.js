import {
  REQUEST_CHARACTER_DETAIL,
  SUCCESS_CHARACTER_DETAIL,
  ERROR_CHARACTER_DETAIL,
  // REQUEST_CHARACTER_HOME,
  // SUCCESS_CHARACTER_HOME,
  // ERROR_CHARACTER_HOME,
} from '../constants/ActionTypes'

const initialState = {
  detail: {},
  home: {},
  loading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER_DETAIL:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SUCCESS_CHARACTER_DETAIL:
      return {
        ...state,
        detail: action.payload,
        loading: false,
        error: '',
      }

    case ERROR_CHARACTER_DETAIL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

    // case REQUEST_CHARACTER_HOME:
    //   return {
    //     ...state,
    //     loading: true,
    //   }

    // case SUCCESS_CHARACTER_HOME:
    //   return {
    //     ...state,
    //     home: action.payload,
    //     loading: false,
    //   }

    // case ERROR_CHARACTER_HOME:
    //   return {
    //     ...state,
    //     loading: false,
    //   }

    default:
      return state
  }
}

export default reducer
