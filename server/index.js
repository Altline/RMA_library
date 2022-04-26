const express = require("express");
const PORT = process.env.PORT || 3001;
const searchRouter = require("./routes/search")
const app = express();

app.use("/search",searchRouter)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

