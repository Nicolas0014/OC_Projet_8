import axios from "axios";

const instance = axios.create({
  baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/`,
});

export const instanceAxios = () => {
  return axios.create({
    baseURL: `${import.meta.env.VITE_BACKEND_URL}/api/`,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};
export default instance;
