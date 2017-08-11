import React from 'react'
import { connect } from 'react-redux'

import { makeRequest } from '../../helpers/makeRequest'
import {
  addEntry,
  addEntrySuccess,
  addEntryFail
} from '../../actions/entry'

import './index.css'

let PostEntry = ({ dispatch }) => {
  let input

  const onHandleSubmit = e => {
    e.preventDefault()

    if (!input.value.trim()) {
      return
    }

    dispatch(addEntry(input.value))

    makeRequest('POST', '/entry', {
      entry: input.value
    }).then(
      response => dispatch(addEntrySuccess(response)),
      error => dispatch(addEntryFail(error))
    )

    input.value = ''
  }

  return (
    <div className='eight columns offset-by-two'>
      <form>
        <textarea
          className='u-full-width'
          placeholder={'What\'s happening?'}
          ref={node => {
            input = node
          }}>
        </textarea>
        <input
          className='button-primary'
          type='submit'
          value='Submit'
          onClick={onHandleSubmit}
        />
      </form>
    </div>
  )
}

PostEntry = connect()(PostEntry)

export default PostEntry