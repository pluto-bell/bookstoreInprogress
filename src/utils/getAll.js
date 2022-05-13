import axios from "axios";

export default async function getAll(param, setState) {
  try {
    const response = await axios.get(`http://localhost:8082/api/${param}/`);
    return setState(response.data);
  } catch (err) {
    console.log(err);
  }
}
