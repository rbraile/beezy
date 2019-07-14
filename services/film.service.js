import { API_URL, FILMS } from '../constants/api'
import axios from 'axios'

export const getFilmListService = async () => {
  try {
    const res = await axios.get(API_URL + FILMS)
    return res
  } catch (err) {
    throw new Error(err)
  }
}
