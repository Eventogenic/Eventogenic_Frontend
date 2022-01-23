import axios from "axios";

const instance = axios.create({
  baseURL: "https://eventogenic.herokuapp.com/api/v1",
});

export default instance;
