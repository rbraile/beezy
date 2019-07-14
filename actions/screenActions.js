import { 
  UPDATE_SCREEN_SIZE,
  SET_SCREEN_SIZE
} from '../constants/ActionTypes'

export const getScreenSize = (payload) => ({
  type: UPDATE_SCREEN_SIZE,
  payload
}) 