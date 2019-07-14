import { API_URL, CHARACTER } from '../constants/api'
import axios from 'axios'

// http://www.mocky.io/v2/5d2aeaaf3100006700582197

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
