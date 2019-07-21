import charactersReducer from './characters.reducer'
import characterReducer from './character.reducer'
import filmReducer from './film.reducer'
import paginateReducer from './paginate.reducer'
import orderReducer from './order.reducer'
import searchReducer from './search.reducer'
import planetReducer from './planet.reducer'

export default {
  characters: charactersReducer,
  character: characterReducer,
  films: filmReducer,
  paginate: paginateReducer,
  order: orderReducer,
  searchString: searchReducer,
  planet: planetReducer,
}
