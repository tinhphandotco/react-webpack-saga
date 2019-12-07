const initState = {
  count: 0,
  counting: false,
};

export default function(state = initState, action) {
  switch (action.type) {
    case "SAVE_COUNT": {
      return {
        ...state,
        count: action.count,
      };
    }
    case "ADD": {
      return {
        ...state,
        count: state.count + 1,
      };
    }

    case "SUB": {
      return {
        ...state,
        count: state.count - 1,
      };
    }

    case "RESET": {
      return initState;
    }

    default:
      return state;
  }
}
