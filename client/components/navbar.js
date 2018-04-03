import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

const Navbar = (props) => {
  const { setFilter } = props;
  const query = new URLSearchParams(props.location.search);
  const order = query.get('order') || 'ASC';

  return (
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
      <div className='filter-container'>
        <div className='option-container'>
          <label>Order:</label>
          <select value={order} onChange={setFilter}>
            <option value="ASC">ASC</option>
            <option value="DESC">DESC</option>
          </select>
        </div>
      </div>
    </div>
  )
}
/**
 * CONTAINER
 */
const mapState = state => {
  return {
    planets: state.planets
  }
}

const mapDispatch = (dispatch, ownProps) => {
  const { location, history } = ownProps;
  return {
    setFilter(e) {
      history.push({
        pathname: location.pathname,
        search: `order=${e.target.value}`,
      })
    }
  }
}

export default withRouter(connect(mapState, mapDispatch)(Navbar))

/**
 * PROP TYPES
 */
Navbar.propTypes = {

}
