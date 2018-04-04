import axios from 'axios';
import {
  setPeople,
  setPlanets,
  setSpaceships,
  setSpecies,
  setVehicles,
  setFilms,
} from '../store';

const DATA_SETS = [
  {type: 'people', actionCreator: setPeople},
  {type: 'planets', actionCreator: setPlanets},
  {type: 'spaceships', actionCreator: setSpaceships},
  {type: 'species', actionCreator: setSpecies},
  {type: 'vehicles', actionCreator: setVehicles},
  {type: 'films', actionCreator: setFilms},
];

const combineData = dataSets => {
  return dataSets.reduce((a, b) => Object.assign(a, b), {});
};

// Eager load using entire state rather than api
export const eagerLoadAllData = (state) => {
  const types = ['planets', 'people', 'films', 'vehicles', 'spaceships', 'species'];

  // [props to check, type it belongs to]
  const propsToLoad = [
    ['residents', 'people'],
    ['films', 'films'],
    ['pilots', 'people'],
    ['species', 'species'],
    ['vehicles', 'vehicles'],
    ['starships', 'spaceships'],
    ['characters', 'people'],
    ['people', 'people'],
    ['planets', 'planets'],
    ['homeworld', 'planets'],
  ];

  const stripData = item => {
    return item.name ? item.name : item.title;
  };

  const findMatchingUrl = (url, type) => {
    return state[type].filter(itemTwo => itemTwo.url === url)[0]
  };

  // eager loads one item
  const eagerLoad = item => {
    let loadedItem = Object.assign({}, item);
    propsToLoad.forEach(([prop, type]) => {
      const curVal = loadedItem[prop];
      if (curVal) {
        loadedItem[prop] = Array.isArray(curVal)
          ? curVal.map(url => findMatchingUrl(url, type))
              .map(stripData)
              .join(', ')
          : loadedItem[prop] = stripData(findMatchingUrl(curVal, type));
      }
    });
    return loadedItem;
  };

  // runs eagerLoad on every item in every collection
  const loadedState = types.map(type => {
    return {
      [type]: state[type].map(eagerLoad),
    }
  });
  return combineData(loadedState);
};

// gets all pages
export const recursiveApiFetch = (dispatch, { type, actionCreator }) => {
  const slug = type === 'spaceships' ? 'starships' : type;
  let combinedData = {
    [type]: [],
  };

  const recursivelyFetchAll = (url = `https://swapi.co/api/${slug}/`) => {
    return axios.get(url)
      .then(res => res.data)
      .then(data => {
        combinedData[type] = [...combinedData[type], ...data.results];
        return data.next
          ? recursivelyFetchAll(data.next)
          : combinedData;
      })
      .catch(console.error);
  };

  // init
  return recursivelyFetchAll();
}

export const getAllData = dispatch => {
  const allDataSets = DATA_SETS.map(set => recursiveApiFetch(dispatch, set));
  console.log(DATA_SETS)

  Promise.all(allDataSets)
    .then(combineData)
    .then(combinedResults => {
      const eagerLoadedResults = eagerLoadAllData(combinedResults)
      DATA_SETS.forEach(({type, actionCreator}) => {
        dispatch(actionCreator(eagerLoadedResults[type]));
      });
    })
    .catch(console.error);
};
