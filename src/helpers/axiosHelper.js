import axios from "axios";

const serverURL = import.meta.env.VITE_APP_ROOT_SERVER;
const apiEP = serverURL + "/ap/v1";
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
