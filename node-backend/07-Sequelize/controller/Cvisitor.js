const { Visitor } = require('../model');

exports.home = (req, res) => {
  res.render('index');
};

// GET /visitor => 기존 방명록을 전체 조회 후 render 'visitor.ejs'
exports.visitor = (req, res) => {
  Visitor.findAll() // = SELECT * FROM visitor; 과 같은 뜻
    .then((result) => {
      console.log('findAll result : ', result);
      console.log('0 index의 username', result[0].dataValues.username); // dataValues는 생략 가능!
      // 나왔으면 하는 결과값 : [{id: , username: , comment: }]
      res.render('visitor', { data: result });
    });
};

// POST /visitor => 방명록 insert
exports.postVisitor = (req, res) => {};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {};
