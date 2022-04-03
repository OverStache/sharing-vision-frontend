import axios from "axios";
import { url } from "./config";

const Delete = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${url}/${path}`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

export default Delete