import {
  ADD_ENTRY_SUCCESS,
  GET_ENTRIES_SUCCESS
} from '../actions/actionTypes'

const entry = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY_SUCCESS:
      return [...state, action.response]
    case GET_ENTRIES_SUCCESS:
      return action.response
    default:
      return state
  }
}

export default entry