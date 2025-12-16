import axios from "axios";

const API_URL = "http://localhost:8080/api";

export const getAllProducts = () => {
  return axios.get(`${API_URL}/products`);
};

export const getProductByName = (name) => {
  return axios.get(`${API_URL}/products/${name}`);
};

export const createProduct = (product) => {
  return axios.post(`${API_URL}`, product);
};
