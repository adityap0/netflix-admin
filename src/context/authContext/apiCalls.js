import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthActions";
import env from "react-dotenv";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(env.REACT_APP_BASE_URL + "auth/login", user);
    res.data.isAdmin && dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};
