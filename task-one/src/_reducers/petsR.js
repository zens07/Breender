const initialState = {
  data: {},
  authPets: [],
  isLoading: false,
  error: false
};

const pets = (state = initialState, action) => {
  switch (action.type) {
    case "GET_PET_PENDING":
    case "AUTH_PET_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_PET_FULFILLED":
      return {
        ...state,
        isLoading: false,
        data: action.payload.data
      };
    case "AUTH_PET_FULFILLED":
      return {
        ...state,
        isLoading: false,
        authPets: action.payload.data
      };
    case "GET_PET_REJECTED":
    case "AUTH_PET_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};
export default pets;
