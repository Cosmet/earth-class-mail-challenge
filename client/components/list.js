import React, { Component } from 'react'
import {connect} from 'react-redux'
import {withRouter, Link} from 'react-router-dom'

import { ListItem } from './';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { type } = props.match.params;
    const items = props[type];

    return (
      <div className="list-container">
        {
          items.map((item, idx) => <ListItem key={idx} type={type} data={item} />)
        }
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    planets: state.planets,
    spaceships: state.spaceships,
    species: state.species,
    vehicles: state.vehicles,
    films: state.films,
    people: state.people,
  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default withRouter(connect(mapState, mapDispatch)(List))

