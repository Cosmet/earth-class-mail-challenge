import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter, Link } from 'react-router-dom'

import { ListItem } from './';

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { props } = this;
    const { type } = props.match.params;
    const query = new URLSearchParams(props.location.search);
    const { filter, sortData } = props;
    const order = query.get('order') || 'ASC';
    const items = sortData({ type, data: props[type], order });

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
    sortData({ type, data, order = 'ASC' }) {
      const dataKey = type !== 'films' ? 'name' : 'title';
      const sortedData = data.sort((a, b) => {
        return order === 'ASC'
          ? a[dataKey].localeCompare(b[dataKey]) // Ascending
          : b[dataKey].localeCompare(a[dataKey]) // Descending
      });
      return sortedData;
    },
  }
}

export default withRouter(connect(mapState, mapDispatch)(List))

