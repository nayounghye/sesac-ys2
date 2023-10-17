const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(PORT, function () {
  console.log(`Sever Open: ${PORT}`);
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', function (req, res) {
  res.render('index');
});

app.get('/get', function (req, res) {
  console.log(req.query);
  res.send('정보입력 완료!');
});
