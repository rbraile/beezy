import { SET_SELECTED_PAGE, SET_PAGES_COUNT } from '../constants/ActionTypes'

export const setPagesCount = pagesCount => ({
  type: SET_PAGES_COUNT,
  pagesCount,
})

export const setSelectedPage = selectedPage => (dispatch, getState) => {
  const { paginate } = getState()
  dispatch(
    setSelectedPageAction({
      selectedPage: selectedPage,
      currentPage: paginate.selectedPage,
    })
  )
}

export const setSelectedPageAction = payload => ({
  type: SET_SELECTED_PAGE,
  payload,
})
