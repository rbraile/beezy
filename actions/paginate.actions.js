import { SET_SELECTED_PAGE } from '../constants/ActionTypes'

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
