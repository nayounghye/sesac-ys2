const mysql = require('mysql');
const cnn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'qwe123!@#',
  database: 'sesac_test',
});

exports.post_signup = (data, cb) => {
  // 여긴 백엔드 단이므로,
  // controller에 입력한 Cuser에 입력되는 회원 정보를 insert하는 api작성
  const sql = `INSERT INTO user(userid, name, pw) VALUES('${data.userid}','${data.name}','${data.pw}');`;
  cnn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    cb();
  });
};

exports.post_signin = (data, cb) => {
  // 여기는 백엔드! controller에 입력되는 정보를 갖고, data= {userid, pw}
  // 회원 정보가 있는지 검색해야 하므로 SELECT를 사용한다.
  let sql = `SELECT * FROM user WHERE userid='${data.userid}' and pw='${data.pw}' limit 1;`;
  cnn.query(sql, function (err, result) {
    if (err) throw err;
    cb(result);
  });
};
exports.get_user = (id, cb) => {
  let sql = `SELECT * FROM user WHERE id='${id}' limit 1;`;
  cnn.query(sql, function (err, rows) {
    if (err) throw err;
    cb(rows);
  });
};

exports.update_profile = (data, cb) => {
  let sql = `UPDATE user SET name='${data.name}', userid='${data.userid}',  pw='${data.pw}' WHERE id='${data.id}'`;
  // Cnn : sql을 실행시키는 쿼리 메소드
  cnn.query(sql, (err) => {
    if (err) throw err;
    cb();
  });
};
exports.delete_user = (id, cb) => {
  const sql = `DELETE FROM user WHERE id='${id}'`;
  cnn.query(sql, (err) => {
    if (err) throw err;
    cb();
  });
};
