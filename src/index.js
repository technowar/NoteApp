import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'

import App from './components/App'
import ConfigureStore from './store/configureStore'
import { retrieveEntries } from './actions/entry'

import './index.css'

const store = ConfigureStore()

store.dispatch(retrieveEntries())

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('app')
)