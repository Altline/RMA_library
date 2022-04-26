const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("/:value",getBooks)

async function getBooks(req,res,next){
    var rawData;
    await axios.get("https://www.googleapis.com/books/v1/volumes?q="+req.params.value)
    .then(function(response){rawData=response.data})
    .catch(function (error) {console.log(error);})

    var data = {totalItems: rawData.totalItems,
    items: rawData.items.map(({id,selfLink,volumeInfo:{title,subtitle,authors,publisher,publishedDate,description,categories,imageLinks}})=>{return {
        id: id,
        selfLink: selfLink,
        title: title,
        subtitle:subtitle,
        authors:authors,
        publisher:publisher,
        publishedDate:publishedDate,
        description:description,
        categories:categories,
        imageLinks:imageLinks};
    })
    };

    res.json(data);
    next()
}

module.exports = router