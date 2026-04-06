import axios from "axios";


const BASE_URL = import.meta.env.BASE_URL

const apiClient = axios.create({
  baseURL: BASE_URL,
});

export default apiClient;
