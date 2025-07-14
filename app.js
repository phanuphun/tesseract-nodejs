const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
require('dotenv').config()
const path = require("path");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

console.log(`0`)
app.use(helmet());
app.use(morgan("dev"));
app.use(cors('*'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

console.log(`1`);
app.get("/", (req, res) => {
  res.status(200).send({
    api:"God Eye OCR API",
    version: "1.0.0",
    status: "up",
    time: new Date().toISOString(),
  })
});

console.log(`2`);
app.use("/api/v1", require("./controllers/tesseract"));

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
