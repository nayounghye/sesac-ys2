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
  res.send('get 요청 완료!');
});

app.post('/post', function (req, res) {
  console.log(req.body);
  res.render('result', {
    name: req.body.name,
  });
});

app.post('/post/vaildation', function (req, res) {
  console.log(req.body);
  res.render('index');
});
