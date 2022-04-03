import axios from "axios";
import { url } from "./config";

const post = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.post(`${url}/${path}`, data)
      .then((res) => {
          resolve(res.data)
        }, (error) => {
          reject(error)
        })
  })
  return promise
}

export default post