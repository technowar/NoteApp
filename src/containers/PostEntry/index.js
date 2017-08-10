import React from 'react'
import { connect } from 'react-redux'

import { addEntry } from '../../actions'

let PostEntry = ({ dispatch }) => {
  let input

  const onHandleSubmit = e => {
    e.preventDefault()

    if (!input.value.trim()) {
      return
    }

    dispatch(addEntry(input.value))

    input.value = ''
  }

  return (
    <div className='textarea-container'>
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