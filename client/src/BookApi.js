import { getBookShelf, getWishlist } from "./firebase/firebasedb";

const axios = require("axios");

const BASE_URL = "http://localhost:3001/"
axios.defaults.baseURL = BASE_URL;

export default class BookApi {

  static async getBook(bookId) {
    return axios.get(`book/${bookId}`);
  }

  static async searchBooks(query, startIndex, maxResults) {
    return axios.get("search", { params: { q: query, startIndex: startIndex, maxResults: maxResults } });
  }

  static async getBookShelf() {
    const result = [];
    const docs = await getBookShelf();
    for (const e of docs) {
      const book = await this.getBook(e.id);
      result.push(book.data);
    }
    return result;
  }

  static async getWishlist() {
    const result = [];
    const docs = await getWishlist();
    for (const e of docs) {
      const book = await this.getBook(e.id);
      result.push(book.data);
    }
    return result;
  }

}