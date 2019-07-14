import { 
  GET_DELIVERIES,
  REMOVE_DELIVERY,
  EDIT_DELIVERY,
  SAVE_DELIVERY
 } from '../constants/ActionTypes';

export const getDeliveries = (pathToApi) => async dispatch => {
  try {
    const res = await fetch(pathToApi ,{
        'method': 'GET'
    });
    const deliveriesList = await res.json();
    dispatch(setDeliveries(deliveriesList.deliveries));
  }
  catch (err) {
    dispatch(setDeliveries([]));
  }
}
    
export const setDeliveries = data => ({
  type: GET_DELIVERIES,
  payload:data
});

export const removeDelivery = (id) => dispatch => {
  return dispatch({ type: REMOVE_DELIVERY, payload: id });
}

export const editDelivery = (delivery) => dispatch => {
  return dispatch({ type: EDIT_DELIVERY, payload: delivery });
}

export const saveDelivery = (delivery) => dispatch => {
  return dispatch({ type: SAVE_DELIVERY, payload: delivery });
}
