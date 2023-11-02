const { Visitor } = require('../model');

exports.home = (req, res) => {
  res.render('index');
};

// ---------------------- 방명록 관련 ----------------------

// GET /visitor => 기존 방명록을 전체 조회 후 render 'visitor.ejs'
exports.visitor = (req, res) => {
  Visitor.findAll() // = SELECT * FROM visitor; 과 같은 뜻
    .then((result) => {
      console.log('findAll result : ', result);
      console.log('0 index의 username : ', result[0].dataValues.username); // dataValues는 생략 가능!
      // 나왔으면 하는 결과값 : [{id: , username: , comment: }]
      res.render('visitor', { data: result });
    });
};

// 1. --- POST /visitor => 방명록 insert
// exports.postVisitor = (req, res) => {
//   const data = {
//     // data안에 있는 key정보는 내가 지어내는게 아님 컬럼 정보이므로
//     // 컬럼명을 오타없이 똑같이 쳐줘야한다!
//     username: req.body.username,
//     comment: req.body.comment,
//   };
//   Visitor.create(data)
//     .then((result) => {
//       console.log('create result : ', result);
//       res.send(result);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.Jitatus(500).send('오류 발생');
//     });
// };

// 1-2. ---POST /visitor => 방명록 insert --- async, await 작성버전
exports.postVisitor = async (req, res) => {
  const data = {
    // data안에 있는 key정보는 내가 지어내는게 아님 컬럼 정보이므로
    // 컬럼명을 오타없이 똑같이 쳐줘야한다!
    username: req.body.username,
    comment: req.body.comment,
  };
  const createVisitor = await Visitor.create(data);
  res.send(createVisitor);
};

// DELETE /visitor/:id => 방명록 삭제
exports.deleteVisitor = (req, res) => {
  Visitor.destroy({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('destroy result : ', result);
    res.send({ result: true });
  });
};

// GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // SELECT * FROM visitor WHERE id = ?? LIMIT 1; 을 아래처럼 작성!
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result : ', result);
    res.send(result);
  });
};

// PATCH /visitor/:id => 방명록 수정
exports.patchVisitor = (req, res) => {
  const data = {
    username: req.body.username,
    comment: req.body.comment,
  };
  // UPDATE FROM visitor SER username='??', comment='??' WHERE id = ? 를 아래처럼 작성!
  Visitor.update(data, {
    where: {
      id: req.body.id,
    },
  }).then((result) => {
    console.log('update result : ', result);
    res.send(result);
  });
};

// 임시 라우터
exports.getTest = (req, res) => {
  // SELECT username FROM visitor WHERE id = 16 ORDER BY username ASC; 처럼 조회하고자 하면?
  Visitor.findAll({
    attributes: ['username', 'id'],
    // where: {
    //   id: req.params.id,
    // },
    order: ['username', 'ASC'],
  }).then((result) => {
    console.log('findOne result : ', result);
    res.send(result);
  });
};

// ---------------------- 회원가입 페이지 관련 ----------------------

exports.index2 = (req, res) => {
  res.render('index2');
};

exports.signup = (req, res) => {
  res.render('signup');
};

// User 테이블에 데이터 insert
exports.post_signup = async (req, res) => {
  const data = {
    id: req.body.id,
    userid: req.body.userid,
    name: req.body.name,
    pw: req.body.pw,
  };
  const createUser = await UserActivation.create(data);
  res.send(createUser);
};

exports.signin = (req, res) => {
  res.render('signin');
};

// -------------------GET /visitor/:id => 방명록 하나 조회
exports.getVisitorById = (req, res) => {
  // SELECT * FROM visitor WHERE id = ?? LIMIT 1; 을 아래처럼 작성!
  Visitor.findOne({
    where: {
      id: req.params.id,
    },
  }).then((result) => {
    console.log('findOne result : ', result);
    res.send(result);
  });
};
// -----------------------

// 모델과 연결해 실제로 회원이 있는지 검색해야므로 모델과 연결을 해줘야함!
exports.getUserId = (req, res) => {
  const { name, pw } = req.body;
  User.findOne({
    where: {
      name: name,
      pw: pw,
    },
  })
    .then((result) => {
      if (result) {
        res.send({ result: true, id: user.id });
      } else {
        res.send({ result: false });
      }
    })
    .catch((err) => {
      console.errer(err);
      res.status(500).send('오류가 발생했습니다.');
    });
};
