import {
  ADD_ENTRY
} from '../actions/entry'

const entry = (state = [], action) => {
  switch (action.type) {
    case ADD_ENTRY:
      return [...state, {
        text: action.text
      }]
    default:
      return state
  }
}

export default entry