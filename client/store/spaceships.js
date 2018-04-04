import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_SPACESHIPS = 'SET_SPACESHIPS'

/**
 * INITIAL STATE
 */
const defaultSpaceships = []

/**
 * ACTION CREATORS
 */
export const setSpaceships = spaceships => ({ type: SET_SPACESHIPS, spaceships })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultSpaceships, action) {
  switch (action.type) {
    case SET_SPACESHIPS:
      return action.spaceships
    default:
      return state
  }
}
