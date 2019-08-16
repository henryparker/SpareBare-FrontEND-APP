export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        info: action.info
      };
    case "LOGOUT":
      return {};
    default:
      return state;
  }
};
