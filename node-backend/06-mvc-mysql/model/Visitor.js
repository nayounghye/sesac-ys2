// mysql 사용시 모듈적는 부분에 mysql 불러오는 코드 작성
const mysql = require('mysql');
const { visitor } = require('../controller/Cvisitor');

// createConnection : 여기 적은 mysql 연결 정보를 받아서 mysql과 연결한다.
// DB를 연결할 때 어떤 정보가 필요할까? host(ip),user(db 사용자), password, database 이름
// mysql 은 promise기반이 아니라 callback 함수로 넘겨줘야한다. -> 다른 방식으로 사용이 가능하나 이 방식도 알아두면 좋음!
const conn = mysql.createConnection({
  // 기본 root 계정은 맥에선 접근이 되고, 윈도우에선 오류가 발생하기 때문에
  // 협업할 땐 다른 계정을 만들어서 db에 접근해야 한다.
  //   host: 'localhost',
  //   user: 'root',
  //   password: '',
  //   database: 'sesac_test',
  // });
  host: 'localhost',
  user: 'user',
  password: 'qwe123!@#',
  database: 'sesac_test',
});

exports.getVisitors = (cb) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    // err(에러) 변수가 빈 값이 아니면, 에러가 발생했다는 것으로 if문으로 에러 처리를 해줘야 한다. 아래 코드 뜻은 에러 발생시 버리겠다.
    if (err) {
      throw err;
    }
    // throw를 만나면 함수가 여기서 종료된다. 그러므로 다음 함수를 입력해줘야 한다.
    console.log('visitor', rows);
    cb(rows);
  });
};

// 아래에서 콜백 함수는 Cvisitor 파일에 있는 postVisitor 함수를 의미한다.
exports.insertVisitor = (data, cb) => {
  //insert into visitor (username, comment) values ('??', '??')
  const sql = `insert into visitor (username, comment) values ('${data.username}', '${data.comment}')`;

  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    console.log('visitor insert', result);
    cb(result.insertId);
  });
};

exports.delVisitor = (id, cb) => {
  // delete 할 id가 필요함.
  const sql = `delete from visitor where id =  ${id}`;
  conn.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    // 아래 if는 좀더 정확한 동작을 위한 선택사항
    let flag = false;
    if (result.affectedRows) {
      flag = true;
    }
    console.log('visitor delete', result);
    cb(flag);
  });
};

// 아래는 이제 db연결을 했기 때문에 주석처리!
// exports.getVisitors = () => {
//   return [
//     { id: 1, username: '죠르디', comment: '죠하!' },
//     { id: 2, username: '앙몬드', comment: '앙하!' },
//   ];
// };
