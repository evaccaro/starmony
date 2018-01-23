export default function starSignsReducer(
  state = { loading: false, signs: [] },
  action
) {
  switch (action.type) {
    case "LOADING_STAR_SIGNS":
      return Object.assign({}, state, { loading: true });
    case "FETCH_STAR_SIGNS":
      return Object.assign({}, state, {
        loading: false,
        signs: action.payload
      });
    default:
      return state;
  }
}

