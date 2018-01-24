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
    case "UPDATE_FAVORITES":
      return {
        ...state,
        current_user: { ...state.current_user, favorites: action.favorites }
      };
    default:
      return state;
  }
}
