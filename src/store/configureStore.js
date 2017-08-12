import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import {
  createStore,
  applyMiddleware
} from 'redux'

import reducer from '../reducers'

export default function ConfigureStore() {
  return createStore(
    reducer,
    applyMiddleware(thunk),
    applyMiddleware(createLogger())
  )
}