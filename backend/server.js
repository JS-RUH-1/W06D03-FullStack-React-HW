const express = require("express");
const app = express();
const blogRouter = require("./routes/blogsRoute");
var cors = require("cors");

app.use(cors());
app.use("/blogs", blogRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("server is running in port 3001");
});
