import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_VEHICLES = 'GET_VEHICLES'

/**
 * INITIAL STATE
 */
const defaultVehicles = []

/**
 * ACTION CREATORS
 */
const getVehicles = vehicles => ({ type: GET_VEHICLES, vehicles })

/**
 * THUNK CREATORS
 */

export const fetchVehicles = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'vehicles',
      defaultState: defaultVehicles,
      actionCreator: getVehicles,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultVehicles, action) {
  switch (action.type) {
    case GET_VEHICLES:
      return action.vehicles
    default:
      return state
  }
}
