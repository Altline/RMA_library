const axios = require("axios");

const BASE_URL = "http://localhost:3001/"
axios.defaults.baseURL = BASE_URL;

export default class BookApi {

  static async getBook(bookId) {
    return axios.get(`book/${bookId}`);
  }

  static async queryBooks(query) {
    return axios.get("search", { params: { q: query } });
  }

}