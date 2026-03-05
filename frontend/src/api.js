import axios from "axios";

const API_URL = "http://localhost:5000/login";

export const loginUser = async (username, password) => {

  const response = await axios.post(API_URL, {
    username,
    password
  });

  return response.data;
};