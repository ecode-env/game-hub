import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "25675629453840a996d4e50f9f7463de",
  },
});
export { CanceledError };
