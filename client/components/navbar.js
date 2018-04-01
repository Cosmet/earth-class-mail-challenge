import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

import {
  fetchPlanets,
  fetchSpaceships,
  fetchVehicles,
  fetchPeople,
  fetchFilms,
  fetchSpecies,
} from '../store'


const Navbar = ({ handleClick, isLoggedIn, fetchData }) => (
  <div>
  {fetchData()}
    <h1>Star Wars</h1>
    <h2>Wikipedia</h2>
    <nav>
      <span>Planets</span>
      <span>Spaceships</span>
      <span>Vehicles</span>
      <span>People</span>
      <span>Films</span>
      <span>Species</span>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
    fetchData() {
      dispatch(fetchPlanets());
      dispatch(fetchSpaceships());
      dispatch(fetchVehicles());
      dispatch(fetchPeople());
      dispatch(fetchFilms());
      dispatch(fetchSpecies());
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
