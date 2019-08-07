export const fetchDataAction = async(dispatch) => {
    const URL = process.env.REACT_APP_API_KEY;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON.items,
    })
}