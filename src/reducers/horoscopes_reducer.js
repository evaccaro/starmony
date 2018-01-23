export default function horoscopesReducer(
  state = { loading: false, content: [] },
  action
) {
  switch (action.type) {
    case "LOADING_HOROSCOPES":
      return Object.assign({}, state, { loading: true });
    case "FETCH_HOROSCOPES":
      console.log("fetch horoscopes", action.payload);
      return Object.assign({}, state, {
        loading: false,
        content: action.payload
      });
    default:
      return state;
  }
}
