import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class List extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {

  }
}

const mapDispatch = dispatch => {
  return {

  }
}

export default connect(mapState, mapDispatch)(List)

