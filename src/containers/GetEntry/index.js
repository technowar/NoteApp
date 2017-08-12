import React from 'react'
import { connect } from 'react-redux'

import Entry from '../../components/Entry'

import './index.css'

const Entries = props => {
  if (!props.entries.length) {
    return (
      <div className='eight columns offset-by-two'>
        <div className='u-pull-center'>
          <div className='entry'>
            Nothing to display
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='eight columns offset-by-two'>
      <Entry entries={props.entries}/>
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