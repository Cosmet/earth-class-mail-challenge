import axios from 'axios'

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
export const setPlanets = planets => ({ type: SET_PLANETS, planets });

/**
 * THUNK CREATORS
 */

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
