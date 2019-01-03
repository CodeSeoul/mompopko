import { GET_ERRORS, LOGIN, LOGOUT } from "./types";
import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

//Login User

export const loginUser = userData => dispatch => {
  axios
    .post("http://localhost:5000/api/admin/login", userData)
    .then(res => {
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      setAuthToken(token);
      dispatch({
        type: LOGIN
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      });
    });
};

//Logout User

export const logoutUser = () => {
  localStorage.setItem("jwtToken", false);
  setAuthToken(false);
  return {
    type: LOGOUT
  };
};
