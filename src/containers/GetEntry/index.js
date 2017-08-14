import React from 'react'
import { connect } from 'react-redux'

import Entry from '../../components/Entry'

import './index.css'

const Entries = props => {
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