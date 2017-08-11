import { makeRequest } from '../helpers/makeRequest'
import {
  ADD_ENTRY,
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAIL,
  GET_ENTRIES,
  GET_ENTRIES_SUCCESS,
  GET_ENTRIES_FAIL
} from './actionTypes'

export const addEntry = text => ({
  type: ADD_ENTRY,
  text
})

export const addEntrySuccess = response => ({
  type: ADD_ENTRY_SUCCESS,
  response
})

export const addEntryFail = error => ({
  type: ADD_ENTRY_FAIL,
  error
})

export const getEntries = () => ({
  type: GET_ENTRIES
})

export const getEntriesSuccess = response => ({
  type: GET_ENTRIES_SUCCESS,
  response
})

export const getEntriesFail = error => ({
  type: GET_ENTRIES_FAIL,
  error
})

export function retrieveEntries() {
  return dispatch => {
    dispatch(getEntries())

    makeRequest('GET', '/entry').then(
      response => dispatch(getEntriesSuccess(response)),
      error => dispatch(getEntriesFail(error))
    )
  }
}

export function createEntry(text) {
  return dispatch => {
    dispatch(addEntry(text))

    makeRequest('POST', 'entry', {
      entry: text
    }).then(
      response => dispatch(addEntrySuccess(response)),
      error => dispatch(addEntryFail(error))
    )
  }
}