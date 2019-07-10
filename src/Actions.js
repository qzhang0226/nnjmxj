export const fetchDataAction = async(dispatch) => {
    const URL = `https://www.googleapis.com/drive/v2/files?q='1FYkOX4JPv_1-X0gqaNp9LtAFfqmfsB8n'+in+parents&key=AIzaSyC_QyZ4Xyl5z1PyKA68tXXM7O3R2ideyk0`;
    const data = await fetch(URL);
    const dataJSON = await data.json();
    return dispatch({
      type: 'FETCH_DATA',
      payload: dataJSON.items,
    })
}