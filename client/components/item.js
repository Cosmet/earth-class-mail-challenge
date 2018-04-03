import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

const Item = (props) => {

  return (
    <div className='item-container'>

    </div>
  )
};

const mapState = (state, ownProps) => {

  return {
    planets: state.planets,
    spaceships: state.spaceships,
    species: state.species,
    vehicles: state.vehicles,
    films: state.films,
    people: state.people,
  }
}

const mapDispatch = (dispatch, ownProps) => {
  return {

  }
}

export default withRouter(connect(mapState, mapDispatch)(Item));
