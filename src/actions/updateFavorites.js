export function updateFavorites(favorites) {
  return dispatch => {
    let options = {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token")
      },
      body: JSON.stringify({ favorites })
    };
    fetch(`http://localhost:3000/add_favorite`, options)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "UPDATE_FAVORITES", favorites: json.favorites });
      });
  };
}
