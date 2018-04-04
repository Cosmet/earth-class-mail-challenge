import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_SPECIES = 'SET_SPECIES'

/**
 * INITIAL STATE
 */
const defaultSpecies = []

/**
 * ACTION CREATORS
 */
export const setSpecies = species => ({ type: SET_SPECIES, species })

/**
 * THUNK CREATORS
 */

/**
 * REDUCER
 */
export default function (state = defaultSpecies, action) {
  switch (action.type) {
    case SET_SPECIES:
      return action.species
    default:
      return state
  }
}
