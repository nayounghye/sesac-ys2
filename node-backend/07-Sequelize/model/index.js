const Sequelize = require('sequelize');
const config = require('../config/config.json')['development']; // 불러올 때 객체형태로 불러와지고, config.json 파일에 있는 객체 형태의 키(development/production)로 하위 내용을 전체 불러오고 있다.
// 즉, config = {
// "development": {
//     "host": "localhost",
//     "database": "sesac_test",
//     "username": "user",
//     "password": "qwe123!@#",
//     "dialect": "mysql" //mysql 이라는 db를 사용하겠다는 뜻이다.
//   },
const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체를 만드는 코드 (11-17줄))

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize : sequelize, Sequelize : Sequelize} 지금 db안에는 안에 sequelize가 들어있다.

// const Visitor = require('./Visitor');
// db.Visitor = Visitor(sequelize, Sequelize);
// 24,25줄 코드를 축약해서 표현하면 27줄처럼 쓸 수 있고, 이렇게 쓰는걸 권장.
db.Visitor = require('./Visitor')(sequelize, Sequelize);
// db.Visitor에는 sequelize로 visitor 테이블을 정의한 객체가 담겨있다.

module.exports = db;
