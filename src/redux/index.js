import { createStore, aplyMiddleware, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import saga from './sagas'
import reducers from './reducers'

const sagaMiddleware = createSagaMiddleware()
export default createStore(
  reducers, 
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(saga)

