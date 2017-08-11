import React from 'react'

import PostEntry from '../containers/PostEntry'
import GetEntry from '../containers/GetEntry'

const App = () => (
  <div className='container'>
    <div className='row'>
      <PostEntry/>
      <GetEntry/>
    </div>
  </div>
)

export default App