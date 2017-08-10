import { makeRequest } from '../helpers/makeRequest'
import { ADD_ENTRY } from '../constants'

export function addEntry(text) {
  // const response = makeRequest('POST', '/entry', {
  //   entry: text
  // });

  const response = makeRequest('GET', '/entry');

  return {
    type: ADD_ENTRY,
    text
  }
}