import axios from "axios";

export default async function add(param, data) {
  try {
    const response = await axios.post(
      `http://localhost:8082/api/${param}`,
      data
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
