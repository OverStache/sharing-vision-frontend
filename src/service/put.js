import axios from "axios";
import { url } from "./config";

const put = (path, data) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${url}/${path}`, data)
      .then((res) => {
          resolve(res.data)
        }, (error) => {
          reject(error)
        })
  })
  return promise
}

export default put