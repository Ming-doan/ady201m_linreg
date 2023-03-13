import axios from "axios";

const instance = axios.create({
  baseURL: "http://mingdoan.pythonanywhere.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function postMethod(data) {
  const response = await instance.post("/apis/linreg", data);
  return response.data;
}
