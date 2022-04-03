import axios from "axios";
import { url, path } from "./config";

//get
const getArticle = () => {
  const promise = new Promise((resolve, reject) => {
    axios.get(`${url}/${path}/100/0`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

//post
const addArticle = (data) => {
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
//put
const updateArticle = (data, id) => {
  const promise = new Promise((resolve, reject) => {
    axios.put(`${url}/${path}/${id}`, data)
      .then((res) => {
          resolve(res.data)
        }, (error) => {
          reject(error)
        })
  })
  return promise
}
//delete
const deleteArticle = (id) => {
  const promise = new Promise((resolve, reject) => {
    axios.delete(`${url}/${path}/${id}`)
      .then((res) => {
        resolve(res.data)
      }, (error) => {
        reject(error)
      })
  })
  return promise
}

const API = {
  getArticle,
  addArticle,
  updateArticle,
  deleteArticle
}

export default API
