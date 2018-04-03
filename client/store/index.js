import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import planets from './planets';
import spaceships from './spaceships';
import vehicles from './vehicles';
import people from './people';
import films from './films';
import species from './species';
import selectors from './selectors';

const reducer = combineReducers({
  planets,
  spaceships,
  vehicles,
  people,
  films,
  species,
  selectors,
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));

const store = createStore(reducer, middleware)

export default store
export * from './planets';
export * from './spaceships';
export * from './vehicles';
export * from './people';
export * from './films';
export * from './species';
export * from './selectors';
