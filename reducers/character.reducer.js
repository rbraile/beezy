import {
  REQUEST_CHARACTER_DETAIL,
  SUCCESS_CHARACTER_DETAIL,
  ERROR_CHARACTER_DETAIL,
  SUCCESS_SPECIES,
  ERROR_SPECIES,
} from '../constants/ActionTypes'

const initialState = {
  detail: {},
  home: {},
  loading: true,
  species: {
    loading: true,
    list: [],
    error: '',
  },
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

    case SUCCESS_SPECIES:
      return {
        ...state,
        species: {
          loading: false,
          list: action.payload,
          error: '',
        },
      }
    case ERROR_SPECIES:
      return {
        ...state,
        species: {
          loading: false,
          error: action.payload,
        },
      }

    default:
      return state
  }
}

export default reducer
