import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import App from './components/App'
import reducer from './reducers'

import './index.css'

render(
  <Provider store={createStore(reducer)}>
    <App />
  </Provider>,
  document.getElementById('app')
)