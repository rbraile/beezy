import { 
  GET_DELIVERIES,
  REMOVE_DELIVERY,
  SAVE_DELIVERY,
  EDIT_DELIVERY
} from '../constants/ActionTypes';

import reject from 'lodash/reject';

function removeDeliveryFromState (state) {
  return filter(state, ['id', action.payload.id]);
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case GET_DELIVERIES:
      return action.payload;

    case REMOVE_DELIVERY:
      const list = reject(state, {id: action.payload});
      return [
        ...list
      ];
    case EDIT_DELIVERY:
      newState = removeDeliveryFromState(state);
      return [
        ...newState
      ];

    case SAVE_DELIVERY:
      return [
        ...state,
        action.payload
      ];
    default: return state
  }
}

export default reducer;