import {
  REQUEST_FILM_LIST,
  SUCCESS_FILM_LIST,
  ERROR_FILM_LIST,
} from '../constants/ActionTypes'

import { getFilmListService } from '../services'

export const getFilmList = () => async dispatch => {
  dispatch({ type: REQUEST_FILM_LIST })
  try {
    const res = await getFilmListService()
    dispatch({ type: SUCCESS_FILM_LIST, payload: res.data })
  } catch (err) {
    dispatch({ type: ERROR_FILM_LIST, payload: err })
  }
}
