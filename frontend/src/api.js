import axios from "axios";

const API_URL = "https://login-auth-app-2hny.onrender.com";

export const loginUser = async (username, password) => {

  const response = await axios.post(API_URL, {
    username,
    password
  });

  return response.data;
};