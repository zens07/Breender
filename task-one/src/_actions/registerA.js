import axios from "axios";
import { BASE_URL, TOKEN } from "../config/index";

export const postRegister = data => {
  return {
    type: "POST_REGISTER",
    payload: axios({
      method: "POST",
      url: `${BASE_URL}/register`,
      data
    })
  };
};
