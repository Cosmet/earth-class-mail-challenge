import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_PEOPLE = 'SET_PEOPLE'

/**
 * INITIAL STATE
 */
const defaultPeople = []

/**
 * ACTION CREATORS
 */
export const setPeople = people => ({ type: SET_PEOPLE, people })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultPeople, action) {
  switch (action.type) {
    case SET_PEOPLE:
      return action.people
    default:
      return state
  }
}
