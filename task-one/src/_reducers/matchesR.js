const initialState = {
  indexMatch: [],
  isLoading: false,
  error: false
};

const matches = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MATCHES_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_MATCHES_FULFILLED":
      return {
        ...state,
        isLoading: false,
        indexMatch: action.payload.data
      };
    case "GET_MATCHES_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
