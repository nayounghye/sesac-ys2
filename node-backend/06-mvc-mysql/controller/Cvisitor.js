const Visitor = require('../model/Visitor');

// // 1. ~~:8000 -> index.ejs 를 랜더
// // 2. 여기서 함수부분 컨트롤러로 분해
// router.get('/', function (req, res) {
//   res.render('index');
// });

// // 2. ~~:8000/visitor -> visitor.index.ejs 를 랜더
// // 2. 여기서 함수부분 컨트롤러로 분해
// router.get('/visitor', function (req, res) {
//   res.render('visitor');
// });
// module.exports = router;

// 1. ~~:8000 -> index.ejs 를 랜더
// 1-1. 여기서 함수부분 컨트롤러로 분해
exports.home = (req, res) => {
  res.render('index');
};

// 2. ~~:8000/visitor -> visitor.index.ejs 를 랜더
// 2-1. 여기서 함수부분 컨트롤러로 분해
// exports.visitor = (req, res) => {
//   const data = visitor.getVisitors();
//   res.render('visitor', { data: data });
// };
// mysql로 db를 불러오면 여기가 아래처럼 변경되야함.
exports.visitor = (req, res) => {
  Visitor.getVisitors((rows) => {
    res.render('visitor', { data: rows });
  });
};

// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {
  // insert할 데이터
  console.log('req.body', req.body);
  Visitor.insertVisitor(req.body, (id) => {
    console.log('ctrl postVisitor', id);
    res.send({
      ...req.body,
      id,
    });
  });
};

//delete /visitor/:id -> 방명록 삭제
exports.deleteVisitor = (req, res) => {
  console.log(req.params);
  Visitor.delVisitor(req.params.id, (result) => {
    res.send({ result: result });
  });
  //   res.send('');
};
