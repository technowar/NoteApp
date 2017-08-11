import {
  ADD_ENTRY,
  GET_ENTRIES
} from '../actions/actionTypes'

const entry = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, {
        text: action.text
      }]
    case GET_ENTRIES:
      return state
    default:
      return state
  }
}

export default entry