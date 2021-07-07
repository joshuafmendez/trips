import axios from "axios";

export default axios.create({
  baseURL: "https://trip-rater.herokuapp.com//api/v1/trips",
});
