import { API_URL, CHARACTER } from '../constants/api'
import axios from 'axios'

export const getCharacterListService = async params => {
  try {
    const options = {
      params: {},
    }
    params && (options.params = params)
    const res = await axios.get(API_URL + CHARACTER, options)

    return res
  } catch (err) {
    throw new Error(err)
  }
}

export const getCharacterDetailService = async characterId => {
  try {
    const res = await axios.get(API_URL + CHARACTER + characterId)
    return res
  } catch (err) {
    throw new Error(err)
  }
}
