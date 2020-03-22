import axios from "axios";
import { BASE_URL, TOKEN } from "../config/index";

export const getSpecies = id => {
  return {
    type: "GET_SPECIES",
    payload: axios({
      method: "GET",
      url: `${BASE_URL}/index/species`
    })
  };
};

// export const makeSpecies = (name,age) => {
//     return {
//         type:"MAKE",
//         payload: axios.post('url',{ name, age})
//     }
// }
