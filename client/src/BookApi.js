const axios = require("axios");

const BASE_URL = "http://localhost:3001/"
axios.defaults.baseURL = BASE_URL;

export default class BookApi {

  static async getBook(bookId) {
    return sampleBook;
  }

  static async queryBooks(query) {
    return axios.get("search", { params: { q: query } });
  }

}

const sampleBook = {
  "id": "TvEqDAAAQBAJ",
  "selfLink": "https://www.googleapis.com/books/v1/volumes/TvEqDAAAQBAJ",
  "title": "12 Rules for Life",
  "subtitle": "An Antidote to Chaos",
  "authors": [
    "Jordan B. Peterson"
  ],
  "publisher": "Random House Canada",
  "publishedDate": "2018-01-23",
  "description": "#1 NATIONAL BESTSELLER #1 INTERNATIONAL BESTSELLER What does everyone in the modern world need to know? Renowned psychologist Jordan B. Peterson's answer to this most difficult of questions uniquely combines the hard-won truths of ancient tradition with the stunning revelations of cutting-edge scientific research. Humorous, surprising and informative, Dr. Peterson tells us why skateboarding boys and girls must be left alone, what terrible fate awaits those who criticize too easily, and why you should always pet a cat when you meet one on the street. What does the nervous system of the lowly lobster have to tell us about standing up straight (with our shoulders back) and about success in life? Why did ancient Egyptians worship the capacity to pay careful attention as the highest of gods? What dreadful paths do people tread when they become resentful, arrogant and vengeful? Dr. Peterson journeys broadly, discussing discipline, freedom, adventure and responsibility, distilling the world's wisdom into 12 practical and profound rules for life. 12 Rules for Life shatters the modern commonplaces of science, faith and human nature, while transforming and ennobling the mind and spirit of its readers.",
  "categories": [
    "Psychology"
  ],
  "imageLinks": {
    "smallThumbnail": "http://books.google.com/books/content?id=TvEqDAAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
    "thumbnail": "http://books.google.com/books/content?id=TvEqDAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
  }
};

// temp
const sampleData = {
  "totalItems": 1,
  "items": [
    sampleBook
  ]
};
