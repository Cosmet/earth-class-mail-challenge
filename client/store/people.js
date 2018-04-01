import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_PEOPLE = 'GET_PEOPLE'

/**
 * INITIAL STATE
 */
const defaultPeople = []

/**
 * ACTION CREATORS
 */
const getPeople = people => ({ type: GET_PEOPLE, people })

/**
 * THUNK CREATORS
 */

export const fetchPeople = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'people',
      defaultState: defaultPeople,
      actionCreator: getPeople,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultPeople, action) {
  switch (action.type) {
    case GET_PEOPLE:
      return action.people
    default:
      return state
  }
}
