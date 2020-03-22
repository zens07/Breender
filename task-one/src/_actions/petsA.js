import axios from "axios";
import { BASE_URL, TOKEN } from "../config/index";

export const getPet = id => {
  return {
    type: "GET_PET",
    payload: axios({
      url: `${BASE_URL}/show/pet/${id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  };
};

export const getPetAuth = () => {
  return {
    type: "AUTH_PET",
    payload: axios({
      url: `${BASE_URL}/pet/`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  };
};
