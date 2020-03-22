import axios from "axios";
import { BASE_URL, TOKEN } from "../config/index";

export const getUsers = () => {
  return {
    type: "GET_USERS",
    payload: axios({
      method: "GET",
      url: `${BASE_URL}/user`,
      headers: {
        Authorization: `Bearer ${TOKEN}`
      }
    })
  };
};
