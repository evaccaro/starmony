export default function users_reducer(state = { current_user: {} }, action) {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        current_user: action.user
      };
    case "LOGOUT":
      return {
        ...state,
        current_user: {}
      };
    default:
      return state;
  }
}
