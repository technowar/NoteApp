import {
  ADD_ENTRY_SUCCESS,
  GET_ENTRIES_SUCCESS
} from '../actions/actionTypes'

const entry = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY_SUCCESS:
      return [JSON.parse(action.response), ...state]
    case GET_ENTRIES_SUCCESS:
      return JSON.parse(action.response).reverse()
    default:
      return state
  }
}

export default entry