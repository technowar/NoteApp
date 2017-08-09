import { ADD_ENTRY } from '../constants'

export function addEntry(text) {
  return {
    type: ADD_ENTRY,
    text
  }
}