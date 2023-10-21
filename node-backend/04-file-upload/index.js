const express = require('express');
const app = express();
const PORT = 8000;
const multer = require("multer")

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get("/", function(req, res) {
    res.render("index")
})


app.listen(PORT, function () {
    console.log(`Sever Open: ${PORT}`);
  });
  