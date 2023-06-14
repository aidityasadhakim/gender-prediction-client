import axios from "axios";

export const api = axios.create({
  baseURL: "http://146.190.98.2/api/v1/",
});
