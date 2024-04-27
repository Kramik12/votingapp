const express = require("express");
const app = express();
//require("dotenv").config();

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const POST = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("listening on port 3000");
})
