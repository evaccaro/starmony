export function getHoroscopes(history) {
  return function(dispatch) {
    console.log("DISPATCH", dispatch);
    dispatch({ type: "LOADING_HOROSCOPES" });
    return fetch(`http://localhost:3000/horoscopes/11`)
      .then(res => {
        return res.json();
      })
      .then(responseJson => {
        console.log(responseJson);
        dispatch({ type: "FETCH_HOROSCOPES", payload: responseJson });
      });
  };
}
