import {
  REQUEST_CHARACTER_DETAIL,
  SUCCESS_CHARACTER_DETAIL,
  ERROR_CHARACTER_DETAIL,
  SUCCESS_SPECIES,
} from '../constants/ActionTypes'

const initialState = {
  detail: {},
  home: {},
  loading: true,
  species: {
    loading: true,
    list: [],
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
        },
      }

    default:
      return state
  }
}

export default reducer
