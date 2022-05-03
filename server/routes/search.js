const express = require("express")
const axios = require("axios")
const router = express.Router()

router.get("",getBooks)

async function getBooks(req,res,next){
    var rawData;
    const q=req.query.q;
    const maxResults=req.query.maxResults;
    var target=`https://www.googleapis.com/books/v1/volumes?q=${q}`;
    if(maxResults!=null){
        target=target.concat(`&maxResults=${maxResults}`);
    }
    await axios.get(target)
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