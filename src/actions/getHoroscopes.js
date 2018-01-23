export function getHoroscopes(history, star_sign_id) {
  return function(dispatch) {
    console.log("DISPATCH", dispatch);

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
