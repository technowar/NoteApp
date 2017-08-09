import React from 'react'
import { connect } from 'react-redux'

import { addEntry } from '../../actions'

let PostEntry = ({ dispatch }) => {
  let input

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
          onClick={e => {
            e.preventDefault()

            if (!input.value.trim()) {
              return
            }

            input.value = ''
          }}
        />
      </form>
    </div>
  )
}

PostEntry = connect()(PostEntry)

export default PostEntry