import { makeRequest } from '../helpers/makeRequest'
import { ADD_ENTRY } from '../constants'

export function addEntry(text) {
  const response = makeRequest('POST', '/entry', {
    entry: text
  });

  return {
    type: ADD_ENTRY,
    payload: response
  }
}