import React from 'react'
import PropTypes from 'prop-types'

const Entry = ({ entries }) => {
  return (
    <div className='entries-container'>
      {entries.map(entry =>
        <div className='entry' key={entry._id}>
          {entry.entry}
        </div>
      )}
    </div>
  )
}

Entry.propTypes = {
  entries: PropTypes.array.isRequired
}

export default Entry