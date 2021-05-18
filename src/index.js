const express = require("express");
const cors = require("cors");

const PORT = process.env.PORT || 3000;

const app = express();

const handleRequest = (req, res) => {
  res.json({ message: "Hello" });
};

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.get("/", handleRequest);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
