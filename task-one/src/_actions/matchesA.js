import axios from "axios";
import { BASE_URL, TOKEN } from "../config/index";

export const getMatch = pet_id => {
  return {
    type: "GET_MATCHES",
    payload: axios({
      headers: {
        Authorization: `Bearer ${TOKEN}`
      },
      method: "GET",
      url: `${BASE_URL}/index/match/`,
      params: {
        pet_id
      }
    })
  };
};
