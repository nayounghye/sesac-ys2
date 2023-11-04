<<<<<<< HEAD:node-backend/06-mvc-mysql-pactice1-lily.ver/controller/Cuser.js
const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user 테이블에 회원가입 정보 insert
  // 결과를 send({result: true}) 방식으로 노출할 예정.
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};

exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는지 검색해야 하므로
  // 모델과 연결하는 부분이 필요하다.
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    // 성공 : {result: true, id : 숫자} 객체를 받음.
    // 실패 :  {result: false}
    // 검색결과가 배열로 나온다! 즉, rows.length가 0보다 크다는건 결과값이 있다는 것!
    // 즉, 계정이 있다!
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

exports.profile = (req, res) => {
  // req.body에 {id(number)} 정보가 들어있음.
  // 이 id에 해당하는 user를 select 해야한다. -> 즉, 모델이 필요하다. 모델로 넘어가서 작성!
  // 프로필 파일을 rend할 때 조회된 정보를 프로필 페이지에 보여지게 할 거기 때문에, 데이터를 가져온다.
  User.get_user(req.body.id, function (result) {
    console.log('profile', result);
    if (result.length > 0) res.render('profile', { data: result[0] });
    else res.redirect('/user/signin');
  });
};

exports.profile_edit = (req, res) => {
  // model 연결해서 update!
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
=======
const User = require('../model/User');

exports.index = (req, res) => {
  res.render('index');
};

exports.signup = (req, res) => {
  res.render('signup');
};
exports.post_signup = (req, res) => {
  // 모델과 연결하여, user 테이블에 회원가입 정보 insert
  // 결과를 send({result: true}) 방식으로 노출할 예정.
  User.post_signup(req.body, () => {
    res.send({ result: true });
  });
};

exports.signin = (req, res) => {
  res.render('signin');
};
exports.post_signin = (req, res) => {
  // 모델과 연결해서 실제로 회원이 존재하는지 검색해야 하므로
  // 모델과 연결하는 부분이 필요하다.
  User.post_signin(req.body, function (rows) {
    console.log(rows[0]);
    // 성공 : {result: true, id : 숫자} 객체를 받음.
    // 실패 :  {result: false}
    // 검색결과가 배열로 나온다! 즉, rows.length가 0보다 크다는건 결과값이 있다는 것!
    // 즉, 계정이 있다!
    if (rows.length > 0) res.send({ result: true, id: rows[0].id });
    else res.send({ result: false });
  });
};

exports.profile = (req, res) => {
  // req.body에 {id(number)} 정보가 들어있음.
  // 이 id에 해당하는 user를 select 해야한다. -> 즉, 모델이 필요하다. 모델로 넘어가서 작성!
  // 프로필 파일을 rend할 때 조회된 정보를 프로필 페이지에 보여지게 할 거기 때문에, 데이터를 가져온다.
  User.get_user(req.body.id, function (result) {
    console.log('profile', result);
    if (result.length > 0) res.render('profile', { data: result[0] });
    else res.redirect('/user/signin');
  });
};

exports.profile_edit = (req, res) => {
  // model 연결해서 update!
  const data = {
    ...req.body,
    id: req.params.id,
  };
  User.update_profile(data, function () {
    res.send({ result: true });
  });
};

exports.profile_delete = (req, res) => {
  User.delete_user(req.params.id, function () {
    res.send({ result: true });
  });
};
>>>>>>> 3c8d390eb4502bdc4c444edcc5e207296c787a0a:node-backend/06-mvc-mysql-practice-lily.ver/controller/Cuser.js
