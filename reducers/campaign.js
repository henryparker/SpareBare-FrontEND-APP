export default (state = {}, action) => {
  switch (action.type) {
    case "SET_CAMPAIGN":
      return action.data;
    case "ADD_CAMPAIGN":
      return [action.data, ...state];
    default:
      return state;
  }
};
