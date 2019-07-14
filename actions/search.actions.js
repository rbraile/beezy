import { SUCCESS_SEARCH } from '../constants/ActionTypes'

export const setSearch = search => {
  return { type: SUCCESS_SEARCH, payload: search }
}
