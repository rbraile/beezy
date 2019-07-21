import axios from 'axios'

export const getListOfSpicies = async species => {
  try {
    let speciesList = []

    await Promise.all(
      species.map(async specie => {
        const response = await axios.get(specie)
        speciesList.push(response.data)
      })
    )

    return speciesList
  } catch (err) {
    throw new Error(err)
  }
}
