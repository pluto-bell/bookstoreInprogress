import axios from "axios";

export default async function getById(param, paramId, setState) {
  try {
    const response = await axios.get(
      `http://localhost:8082/api/${param}/${paramId}`
    );
    return setState(response.data);
  } catch (err) {
    console.log(err);
  }
}
