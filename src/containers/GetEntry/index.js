import React from 'react'
import { connect } from 'react-redux'

import './index.css'

const Entries = props => {
  if (!props.entries.length) {
    return (
      <div className='eight columns offset-by-two'>
        <div className='u-pull-center'>
          <h3>
            Nothing to display
          </h3>
        </div>
      </div>
    )
  }

  return (
    <div className='eight columns offset-by-two'>
      <h1>
        Entries
      </h1>
    </div>
  )
}

const mapStateToProps = state => ({
  entries: state.entries
})

const GetEntry = connect(
  mapStateToProps
)(Entries)

export default GetEntry