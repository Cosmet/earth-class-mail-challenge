import axios from 'axios'
import {recursiveApiFetch} from '../lib';

/**
 * ACTION TYPES
 */
const GET_SPECIES = 'GET_SPECIES'

/**
 * INITIAL STATE
 */
const defaultSpecies = []

/**
 * ACTION CREATORS
 */
const getSpecies = species => ({ type: GET_SPECIES, species })

/**
 * THUNK CREATORS
 */

export const fetchSpecies = () =>
  dispatch => {
    recursiveApiFetch({
      dispatch,
      type: 'species',
      defaultState: defaultSpecies,
      actionCreator: getSpecies,
    });
  }

/**
 * REDUCER
 */
export default function (state = defaultSpecies, action) {
  switch (action.type) {
    case GET_SPECIES:
      return action.species
    default:
      return state
  }
}
