import { combineReducers, createStore, applyMiddleware } from 'redux';
import reducers from '../src/reducers';
import middlewares from '../src/middlewares';

const combinedReducer = combineReducers(reducers);

export default stores = createStore(combinedReducer,
  applyMiddleware(
    ...middlewares
  )
);