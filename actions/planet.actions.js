import {
  REQUEST_CHARACTER_HOME,
  SUCCESS_CHARACTER_HOME,
  ERROR_CHARACTER_HOME,
} from '../constants/ActionTypes'

import { getCharacterPlanetService } from '../services'

export const getCharacterPlanet = homeworld => async dispatch => {
  dispatch({ type: REQUEST_CHARACTER_HOME })
  try {
    const res = await getCharacterPlanetService(homeworld)
    dispatch({ type: SUCCESS_CHARACTER_HOME, payload: res.data })
  } catch (err) {
    dispatch({ type: ERROR_CHARACTER_HOME, payload: err.message })
  }
}
