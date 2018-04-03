import React from 'react'
import {Link} from 'react-router-dom'

const ListItem = (props) => {
  const { type, data } = props;

  return (
    <div className='list-item'>
    {
      type === 'films'
        ? <span>{data.title}</span>
        : <span>{data.name}</span>
    }
    </div>
  )
};

export default ListItem;

