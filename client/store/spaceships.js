import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_SPACESHIPS = 'GET_SPACESHIPS'

/**
 * INITIAL STATE
 */
const defaultSpaceships = []

/**
 * ACTION CREATORS
 */
const getSpaceships = spaceships => ({ type: GET_SPACESHIPS, spaceships })

/**
 * THUNK CREATORS
 */

export const fetchSpaceships = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'starships',
      defaultState: defaultSpaceships,
      actionCreator: getSpaceships,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultSpaceships, action) {
  switch (action.type) {
    case GET_SPACESHIPS:
      return action.spaceships
    default:
      return state
  }
}
