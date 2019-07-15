import {
  REQUEST_CHARACTER_LIST,
  SUCCESS_CHARACTER_LIST,
  ERROR_CHARACTER_LIST,
} from '../constants/ActionTypes'

import reject from 'lodash/reject'

function removeDeliveryFromState(state) {
  return filter(state, ['id', action.payload.id])
}

const initialState = {
  results: [],
  loading: true,
  error: '',
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_CHARACTER_LIST:
      return {
        ...state,
        loading: true,
        error: '',
      }

    case SUCCESS_CHARACTER_LIST:
      return {
        ...state,
        loading: false,
        error: '',
        ...action.payload,
      }

    case ERROR_CHARACTER_LIST:
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
