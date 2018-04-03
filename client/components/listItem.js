import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

const ListItem = (props) => {
  const { type, data } = props;
  console.log(data)
  return (
    <div className='list-item'>
    {
      type === 'films'
        ? <span>{data.title}</span>
        : <span>{data.name}</span>
    }
    </div>
  )
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

export default connect(mapState, mapDispatch)(ListItem)

