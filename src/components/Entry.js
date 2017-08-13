import React from 'react'
import PropTypes from 'prop-types'

const Entry = ({ entries }) => {
  return (
    <div className='entries-container'>
      {entries.map(entry =>
        <div className='entry' key={entry._id}>
          <div className='date-container'>
            <span>{moment(entry.createdAt).fromNow()}</span>
          </div>
          <div className='content-container'>
            <span>{entry.entry}</span>
          </div>
        </div>
      )}
    </div>
  )
}

Entry.propTypes = {
  entries: PropTypes.array.isRequired
}

export default Entry