import axios from "axios";

const serverURL = import.meta.env.VITE_APP_ROOT_SERVER;
const apiEP = serverURL + "/api/v1";
const userEP = apiEP + "/users";
//========== user api requests
export const postNewUser = async (obj) => {
  try {
    const { data } = await axios.post(userEP, obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
export const loginUser = async (obj) => {
  try {
    const { data } = await axios.post(userEP + "/login", obj);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
