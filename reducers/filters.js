import { 
  ADD_FILTER,
  CLEAR_FILTER
} from '../constants/ActionTypes';

const initialState = {
  name: {},
  address: {}
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FILTER:
      return {
        ...state,
        ...action.payload
      }
    case CLEAR_FILTER:  
      return {}

    default: return state
  }
}

export default reducer;