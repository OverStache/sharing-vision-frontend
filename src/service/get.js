import axios from "axios";
import { url } from "./config";

const get = (path) => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${url}/${path}`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

export default get