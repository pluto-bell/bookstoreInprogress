import axios, { AxiosResponse } from "axios";

//TODO: show success or failure
export default async function create(
  constructorArg,
  apiParam,
  setState,
  props
) {
  const newConstructor = { ...constructorArg };

  await fetch(`http://localhost:8082/api/${apiParam}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newConstructor),
  }).catch(function (error) {
    console.log(error);
  });
  setState(props);
  // navigate("/login");
  // window.alert("successfull");
}
