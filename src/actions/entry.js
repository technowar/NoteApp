import { makeRequest } from '../helpers/makeRequest'
import {
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAIL,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_FAIL
} from './actionTypes'

export const addEntrySuccess = response => ({
  type: ADD_ENTRY_SUCCESS,
  response
})

export const addEntryFail = error => ({
  type: ADD_ENTRY_FAIL,
  error
})

export const getEntriesSuccess = response => ({
  type: GET_ENTRIES_SUCCESS,
  response
})

export const getEntriesFail = error => ({
  type: GET_ENTRIES_FAIL,
  error
})

export function createEntry(text) {
  return dispatch => {
    return makeRequest('POST', '/entry', {
      entry: text
    }).then(
      response => dispatch(addEntrySuccess(response)),
      error => dispatch(addEntryFail(error))
    )
  }
}

export function retrieveEntries() {
  return dispatch => {
    return makeRequest('GET', '/entry').then(
      response => dispatch(getEntriesSuccess(response)),
      error => dispatch(getEntriesFail(error))
    )
  }
}
