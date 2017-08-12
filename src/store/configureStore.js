import thunk from 'redux-thunk'
import {
  createStore,
  applyMiddleware
} from 'redux'

import reducer from '../reducers'

export default function ConfigureStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk)
  )
}