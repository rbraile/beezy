import { SUCCESS_SPECIES } from '../constants/ActionTypes'

const initialState = {
  loading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUCCESS_SPECIES2':
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

    default:
      return state
  }
}

export default reducer
