import { ADD_ENTRY } from '../constants'

export const addEntry = text => ({
  type: ADD_ENTRY,
  text
})