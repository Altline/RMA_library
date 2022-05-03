const express = require("express");
const PORT = process.env.PORT || 3001;
const searchRouter = require("./routes/search")
const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/search",searchRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

