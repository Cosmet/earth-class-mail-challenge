import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn, fetchData }) => (
  <div>
    <h1>Star Wars</h1>
    <h2>Wikipedia</h2>
    <nav>
      <Link to='/planets'>Planets</Link>
      <Link to='/spaceships'>Spaceships</Link>
      <Link to='/vehicles'>Vehicles</Link>
      <Link to='/people'>People</Link>
      <Link to='/films'>Films</Link>
      <Link to='/species'>Species</Link>
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
