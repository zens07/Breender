const initialState = {
  data: [],
  isLoading: false
};

const species = (state = initialState, action) => {
  switch (action.type) {
    case "GET_SPECIES_PENDING":
      return {
        ...state,
        isLoading: true
      };
    case "GET_SPECIES_FULFILLED":
      return {
        ...state,
        data: action.payload.data.data,
        isLoading: false
      };
    case "GET_SPECIES_REJECTED":
      return {
        ...state,
        isLoading: false,
        error: true
      };
    default:
      return state;
  }
};

export default species;
