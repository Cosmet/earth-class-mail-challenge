import axios from 'axios';

export const recursiveApiFetch = ({ dispatch, type, actionCreator, defaultState}) => {
  let allData = [];
  const recursivelyFetchAll = (url = `https://swapi.co/api/${type}/`) => {
    axios.get(url)
      .then(({data}) => {
        allData = [...allData, ...data.results];
        if (data.next) {
          recursivelyFetchAll(data.next);
        }
        else {
          dispatch(actionCreator(allData || defaultState));
        }
      })
      .catch(console.error);
  };
  recursivelyFetchAll();
}
