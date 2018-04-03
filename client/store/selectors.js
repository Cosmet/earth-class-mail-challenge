import axios from 'axios'

/**
 * ACTION TYPES
 */
const SET_SELECTORS = 'SET_SELECTORS';

/**
 * INITIAL STATE
 */
const defaultSelectors = {
  selectedItem: '',
};

/**
 * ACTION CREATORS
 */
export const setSelectors = selectors =>
  ({ type: SET_SELECTORS, selectors });

/**
 * THUNK CREATORS
 */


/**
 * REDUCER
 */
export default function (state = defaultSelectors, action) {
  switch (action.type) {
    case SET_SELECTORS:
      return Object.assign({}, state, action.selectors);
    default:
      return state
  }
}
