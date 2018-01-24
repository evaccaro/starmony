export function createUser(name, password, birthday, history) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, password, birthday })
    };
    fetch("http://localhost:3000/users", options)
      .then(res => res.json())
      .then(json => {
        localStorage.setItem("token", json.jwt);
        dispatch({ type: "LOGIN", user: json.user });
        history.push("/horoscopes");
      });
  };
}

export function login(name, password, history) {
  return dispatch => {
    let options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, password })
    };
    fetch("http://localhost:3000/login", options)
      .then(res => res.json())
      .then(json => {
        if (json.jwt === undefined) {
          dispatch({ type: "NOTUSER" });
          history.push("/");
          alert(
            "We don't seem to have that username/password. Please try again or create an account."
          );
        } else {
          localStorage.setItem("token", json.jwt);
          dispatch({ type: "LOGIN", user: json.user });
          history.push("/horoscopes");
        }
      });
  };
}

export function getCurrentUser() {
  return dispatch => {
    let headers = {
      headers: { Authorization: localStorage.getItem("token") }
    };
    return fetch("http://localhost:3000/current_user", headers)
      .then(res => res.json())
      .then(json => {
        dispatch({ type: "LOGIN", user: json.user });
      });
  };
}

export function logout() {
  localStorage.removeItem("token");
  return { type: "LOGOUT" };
}
