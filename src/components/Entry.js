import React from 'react'
import PropTypes from 'prop-types'

const Entry = ({ entries }) => {
  return (
    <div className={entries.length ? 'entries-container' : 'entries-container center'}>
      {entries.length ?
        entries.map(entry =>
          <div className='entry' key={entry._id}>
            <span className='date'>{moment(entry.createdAt).fromNow()}</span>
            <span className='content'>{entry.entry}</span>
          </div>
        ) :
          <div className='entry'>
            <span>Nothing to display</span>
          </div>
      }
    </div>
  )
}

Entry.propTypes = {
  entries: PropTypes.array.isRequired
}

export default Entry