import axios from 'axios';
import { getToken } from "./index.js";


export const axiosWithAuth = () => {
    const defaultOptions = {
      baseURL: "https://kickstarter-success-api.herokuapp.com",
      headers: {
        'Content-Type': 'application/json',
      },
    };

// Create instance
let instance = axios.create(defaultOptions);

// Set the AUTH token for any request
instance.interceptors.request.use(function (config) {
    const token = getToken();
  config.headers.Authorization =  token ? `Bearer ${token}` : '';
  return config;
});

return instance;
};

export default axiosWithAuth;