import React, {Component} from 'react'
import {connect} from 'react-redux'
import {withRouter, Route, Switch} from 'react-router-dom'
import PropTypes from 'prop-types'
import {List} from './components'
import {
  fetchPlanets,
  fetchSpaceships,
  fetchVehicles,
  fetchPeople,
  fetchFilms,
  fetchSpecies,
} from './store'

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount () {
    this.props.loadInitialData()
  }

  render () {

    return (
      <Switch>
        <Route exact path="/:type" component={List}/>
      </Switch>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {

  }
}

const mapDispatch = (dispatch) => {
  return {
    loadInitialData () {
      dispatch(fetchPlanets());
      dispatch(fetchSpaceships());
      dispatch(fetchVehicles());
      dispatch(fetchPeople());
      dispatch(fetchFilms());
      dispatch(fetchSpecies());
    }
  }
}

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes))

/**
 * PROP TYPES
 */
Routes.propTypes = {

}
