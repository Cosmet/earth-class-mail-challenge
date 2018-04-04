import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_VEHICLES = 'SET_VEHICLES'

/**
 * INITIAL STATE
 */
const defaultVehicles = []

/**
 * ACTION CREATORS
 */
export const setVehicles = vehicles => ({ type: SET_VEHICLES, vehicles })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultVehicles, action) {
  switch (action.type) {
    case SET_VEHICLES:
      return action.vehicles
    default:
      return state
  }
}
