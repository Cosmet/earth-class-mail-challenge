import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_FILMS = 'GET_FILMS'

/**
 * INITIAL STATE
 */
const defaultFilms = []

/**
 * ACTION CREATORS
 */
const getFilms = films => ({ type: GET_FILMS, films })

/**
 * THUNK CREATORS
 */

export const fetchFilms = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'films',
      defaultState: defaultFilms,
      actionCreator: getFilms,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultFilms, action) {
  switch (action.type) {
    case GET_FILMS:
      return action.films
    default:
      return state
  }
}
