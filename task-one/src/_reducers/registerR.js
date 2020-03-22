const initialState = {
  data: [],
  isLoading: false,
  isLogin: false,
  error: false
};

const register = (state = initialState, action) => {
  switch (action.type) {
    case "POST_REGISTER_PENDING":
      return {
        ...state,
        isLoading: true,
        isLogin: false
      };
    case "POST_REGISTER_FULFILLED":
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isLogin: true
      };
    case "POST_REGISTER_REJECTED":
      return {
        ...state,
        isLoading: false,
        isLogin: false,
        error: true
      };
    default:
      return state;
  }
};

export default register;
