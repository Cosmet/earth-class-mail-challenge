import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_PLANETS = 'GET_PLANETS'

/**
 * INITIAL STATE
 */
const defaultPlanets = []

/**
 * ACTION CREATORS
 */
const getPlanets = planets => ({ type: GET_PLANETS, planets })

/**
 * THUNK CREATORS
 */

export const fetchPlanets = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'planets',
      defaultState: defaultPlanets,
      actionCreator: getPlanets,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultPlanets, action) {
  switch (action.type) {
    case GET_PLANETS:
      return action.planets
    default:
      return state
  }
}
