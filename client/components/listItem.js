import React from 'react'
import {Link} from 'react-router-dom'

const convertToTitle = (str) => {
  return str
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
};

const ListItem = (props) => {
  const { type, data, selector, selected } = props;
  const text = type === 'films' ? data.title : data.name;
  const slug = encodeURI(text);
  const keys = Object.keys(data)
    .filter(key => {
      const excludeKeys = ['name', 'title', 'created', 'edited', 'url'];
      return !excludeKeys.includes(key);
    });

  const detailsClass = selected ? 'details' : 'details hidden'

  return (
    <div className='list-item'>
      <span onClick={() => selector(text)}>{text}</span>
      <div className={detailsClass}>
        {
          keys.map(key => {
            const convertedKey = convertToTitle(key);
            return (
              <span key={key}>{convertedKey}: {data[key] && data[key].length ? data[key] : 'none'}</span>
            )
          })
        }
      </div>
    </div>
  )
};

export default ListItem;

