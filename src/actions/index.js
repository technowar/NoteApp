import {
  ADD_ENTRY,
  ADD_ENTRY_SUCCESS,
  ADD_ENTRY_FAIL
} from '../constants'

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