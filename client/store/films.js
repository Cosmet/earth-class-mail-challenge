import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_FILMS = 'SET_FILMS'

/**
 * INITIAL STATE
 */
const defaultFilms = []

/**
 * ACTION CREATORS
 */
export const setFilms = films => ({ type: SET_FILMS, films })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultFilms, action) {
  switch (action.type) {
    case SET_FILMS:
      return action.films
    default:
      return state
  }
}
