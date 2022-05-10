const PORT = process.env.PORT || 3001;

const express = require("express");
const axios = require("axios")
const searchRouter = require("./routes/search")

const app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/search", searchRouter)

app.get("/book/:id", getBook)

async function getBook(req, res, next) {
  const id = req.params.id;

  var target = `https://www.googleapis.com/books/v1/volumes/${id}/`;
  var rawData;
  
  await axios.get(target)
    .then(function (response) { rawData = response.data })
    .catch(function (error) { console.log(error); })

  const data = {
    id: rawData.id ? rawData.id : "",
    selfLink: rawData.selfLink ? rawData.selfLink : "",
    title: rawData.volumeInfo.title ? rawData.volumeInfo.title : "",
    subtitle: rawData.volumeInfo.subtitle ? rawData.volumeInfo.subtitle : "",
    authors: rawData.volumeInfo.authors ? rawData.volumeInfo.authors : [],
    publisher: rawData.volumeInfo.publisher ? rawData.volumeInfo.publisher : "",
    publishedDate: rawData.volumeInfo.publishedDate ? rawData.volumeInfo.publishedDate : "",
    description: rawData.volumeInfo.description ? rawData.volumeInfo.description : "",
    categories: rawData.volumeInfo.categories ? rawData.volumeInfo.categories : [],
    imageLinks: rawData.volumeInfo.imageLinks ? rawData.volumeInfo.imageLinks : null
  };

  res.json(data);
  next()
}

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

