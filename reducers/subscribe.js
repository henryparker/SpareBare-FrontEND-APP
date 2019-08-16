export default (state = [], action) => {
  switch (action.type) {
    case "SET_SUBSCRIBE":
      return action.data;
    case "ADD_SUBSCRIBE":
      return [action.data, ...state];
    case "REMOVE_SUBSCRIBE":
      return state.filter(val => val !== action.data);
    default:
      return state;
  }
};
