import {createStore, combineReducers, applyMiddleware} from 'redux'
import createLogger from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import planets from './planets';
import spaceships from './spaceships';
import vehicles from './vehicles';
import people from './people';
import films from './films';
import species from './species';

const reducer = combineReducers({
  user,
  planets,
  spaceships,
  vehicles,
  people,
  films,
  species,
});

const middleware = composeWithDevTools(applyMiddleware(
  thunkMiddleware,
  createLogger({collapsed: true})
));

const store = createStore(reducer, middleware)

export default store
export * from './user'
export * from './planets';
export * from './spaceships';
export * from './vehicles';
export * from './people';
export * from './films';
export * from './species';
