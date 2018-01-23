export function getStarSigns() {
  return function(dispatch) {
    return fetch(`http://localhost:3000/star_signs`)
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        dispatch({ type: "FETCH_STAR_SIGNS", payload: responseJson });
      });
  };
}
