import axios from 'axios'

export const getCharacterPlanetService = async url => {
  try {
    const res = await axios.get(url)
    return res
  } catch (err) {
    throw new Error(err)
  }
}
