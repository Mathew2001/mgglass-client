import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL || "http://localhost:4000",
  timeout: 50000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
  // If you need cookies on CORS requests:
  // withCredentials: true,
});

const responseBody = (res) => res.data;

const requests = {
  // params -> query string (?key=value)
  get: (url, params, config) =>
    instance.get(url, { params, ...(config || {}) }).then(responseBody),

  post: (url, data, config) =>
    instance.post(url, data, config).then(responseBody),

  put: (url, data, config) =>
    instance.put(url, data, config).then(responseBody),

  patch: (url, data, config) =>
    instance.patch(url, data, config).then(responseBody),

  // delete can take a config (e.g., headers, params)
  delete: (url, config) =>
    instance.delete(url, config).then(responseBody),
};

export default requests;
export { instance };
