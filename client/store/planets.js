import axios from 'axios'
import { recursiveApiFetch } from '../lib';

/**
 * ACTION TYPES
 */
const SET_PLANETS = 'SET_PLANETS';

/**
 * INITIAL STATE
 */
const defaultPlanets = []

/**
 * ACTION CREATORS
 */
const setPlanets = planets =>
  ({ type: SET_PLANETS, planets });

/**
 * THUNK CREATORS
 */

export const fetchPlanets = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'planets',
      defaultState: defaultPlanets,
      actionCreator: setPlanets,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultPlanets, action) {
  switch (action.type) {
    case SET_PLANETS:
      return action.planets;
    default:
      return state
  }
}
