const { User } = require('../model');

exports.index = (req, res) => {
  res.render('user');
};

exports.signup = (req, res) => {
  res.render('signup');
};
exports.post_signup = (req, res) => {
  User.create(req.body).then((result) => {
    console.log('User create:', result);
    res.send({ result: true });
  });

  // User.post_signup(req.body, function () {
  //   res.send({ result: true })
  // })
};

exports.signin = (req, res) => {
  res.render('signin');
};
exports.post_signin = (req, res) => {
  User.findOne({
    where: { userid: req.body.userid, pw: req.body.pw },
  }).then((result) => {
    console.log('User findOne:', result);
    if (result) res.send({ result: true, id: result.id });
    else res.send({ result: false });
  });
  // 위와 차이점 : MySQL에서는 조회할 때 무조건 배열로 나오기 때문에 length로 확인한다. sequelize는 객체로 조회되기 때문이 값의 유/무로 확인한다.
  // User.post_signin(req.body, function (rows) {
  //   console.log(rows[0])
  //   if (rows.length > 0) res.send({ result: true, id: rows[0].id })
  //   else res.send({ result: false })
  // })
};

exports.profile = (req, res) => {
  User.findOne({
    where: { id: req.body.id },
  }).then((result) => {
    console.log('User findOne:', result);

    // 만약 조회되지 않는다면 result에 null이 담김.
    // 따라서 if문으로 result에 값이 있을 경우에 profile을 렌더하도록 함.
    if (result) res.render('profile', { data: result });
    else res.redirect('/user/signin');
  });
  // User.get_user(req.body.id, function (result) {
  //   console.log('profile', result)
  //   if (result.length > 0) res.render('profile', { data: result[0] })
  //   else res.redirect('/user/signin')
  // })
};

exports.profile_edit = (req, res) => {
  User.update(req.body, {
    where: { id: req.params.id },
  }).then((result) => {
    console.log('User update:', result); // [ 1 ] or [ 0 ]

    // 업데이트 여부에 따라 result에 [ 1 ] 혹은 [ 0 ] 이 담김
    // 따라서 if문을 이용하여 result의 0번 인덱스가 1일 경우에 성공, 그렇지 않으면 실패로 응답
    // 💡 if문에서 알아두면 좋은 상식
    // 1. 1 : true , 0 : false
    // 2. null, undefined : false

    if (result[0]) res.send({ result: true });
    else res.send({ result: false });
  });
  // const data = {
  //   ...req.body,
  //   id: req.params.id,
  // }
  // User.update_profile(data, function () {
  //   res.send({ result: true })
  // })
};

exports.profile_delete = (req, res) => {
  User.destroy({
    where: { id: req.params.id },
  }).then((result) => {
    console.log('User destroy:', result); // 1 or 0

    // 삭제 여부에 따라 result에 1 혹은 0 이 담김
    // 따라서 if문을 이용하여 result가 1일 경우에 성공, 그렇지 않으면 실패로 응답

    if (result) res.send({ result: true });
    else res.send({ result: false });
  });
  // User.delete_user(req.params.id, function () {
  //   res.send({ result: true })
  // })
};
