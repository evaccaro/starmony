export default function users_reducer(
  state = { name: "", horoscopes: [] },
  action
) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        name: action.user.name,
        horoscopes: action.user.horoscopes
      };
    case "LOGOUT":
      return {
        ...state,
        name: "",
        horoscopes: []
      };
    default:
      return state;
  }
}
