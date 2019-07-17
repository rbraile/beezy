import {
  REQUEST_CHARACTER_LIST,
  SUCCESS_CHARACTER_LIST,
  ERROR_CHARACTER_LIST,
  REQUEST_CHARACTER_DETAIL,
  SUCCESS_CHARACTER_DETAIL,
  ERROR_CHARACTER_DETAIL,
  SUCCESS_SPECIES,
} from '../constants/ActionTypes'

import {
  getCharacterListService,
  getCharacterDetailService,
  getListOfSpicies,
} from '../services'

export const getCharacterList = params => async dispatch => {
  dispatch({ type: REQUEST_CHARACTER_LIST })
  try {
    const res = await getCharacterListService(params)
    dispatch({ type: SUCCESS_CHARACTER_LIST, payload: res.data })
  } catch (err) {
    dispatch({ type: ERROR_CHARACTER_LIST, payload: err })
  }
}

export const getCharacterDetail = characterId => async dispatch => {
  dispatch({ type: REQUEST_CHARACTER_DETAIL })
  try {
    const res = await getCharacterDetailService(characterId)
    dispatch({ type: SUCCESS_CHARACTER_DETAIL, payload: res.data })

    const response = await getListOfSpicies(res.data.species)
    dispatch({ type: SUCCESS_SPECIES, payload: response })
  } catch (err) {
    dispatch({ type: ERROR_CHARACTER_DETAIL, payload: err })
  }
}
