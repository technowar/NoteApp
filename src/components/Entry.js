import React from 'react'
import PropTypes from 'prop-types'

const Entry = ({ entry, isDeleted, createdAt, modifiedAt }) => {
  return (
    <div>
      {entry}
      Created: {createdAt}
      Modified: {modifiedAt}
    </div>
  )
}

Entry.propTypes = {
  entry: PropTypes.string.isRequired,
  isDeleted: PropTypes.bool.isRequired,
  createdAt: PropTypes.string.isRequired,
  modifiedAt: PropTypes.string.isRequired
}

export default Entry