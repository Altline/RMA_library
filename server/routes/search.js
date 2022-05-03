const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("", getBooks)

async function getBooks(req, res, next) {
    const q = req.query.q;
    const maxResults = req.query.maxResults;

    var rawData;
    var target = `https://www.googleapis.com/books/v1/volumes?q=${q}`;

    if (maxResults != null) {
        target = target.concat(`&maxResults=${maxResults}`);
    }

    await axios.get(target)
        .then(function (response) { rawData = response.data })
        .catch(function (error) { console.log(error); })

    const data = {
        totalItems: rawData.totalItems,
        items: rawData.items.map(
            ({
                id, selfLink, volumeInfo: {
                    title, subtitle, authors, publisher, publishedDate, description, categories, imageLinks
                }
            }) => {
                return {
                    id: id ? id : "",
                    selfLink: selfLink ? selfLink : "",
                    title: title ? title : "",
                    subtitle: subtitle ? subtitle : "",
                    authors: authors ? authors : [],
                    publisher: publisher ? publisher : "",
                    publishedDate: publishedDate ? publishedDate : "",
                    description: description ? description : "",
                    categories: categories ? categories : [],
                    imageLinks: imageLinks ? imageLinks : null
                };
            })
    };

    res.json(data);
    next()
}

module.exports = router