import characterReducer from './character.reducer'
import filmReducer from './film.reducer'
import filtersReducer from './filters'
import paginateReducer from './paginate.reducer'
import orderReducer from './order.reducer'
import searchReducer from './search.reducer'

export default {
  characters: characterReducer,
  films: filmReducer,
  filters: filtersReducer,
  paginate: paginateReducer,
  order: orderReducer,
  searchString: searchReducer,
}
