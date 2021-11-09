const express = require("express");
const cors = require("cors");
const posts = require("./routers/posts");

const app = express();
const port = 8080;

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

// Routers

app.use("/posts", posts);

app.listen(port, () => {
  console.log(`Express app listening at http://localhost:${port}`);
});
