export function getHoroscopes(history, star_sign_id) {
  return function(dispatch) {
    dispatch({ type: "LOADING_HOROSCOPES" });

    return fetch(`http://localhost:3000/horoscopes/${star_sign_id}`)
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        dispatch({ type: "FETCH_HOROSCOPES", payload: responseJson });
      });
  };
}
