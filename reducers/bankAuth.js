export default (state = {}, action) => {
    switch (action.type) {
      case 'SET_SPARE':
        return {
          totalSpare : action.amount
        };
      default:
        return state;
    }
  };