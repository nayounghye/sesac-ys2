const Sequelize = require('sequelize');
const config = require('../config/config.json')['development']; // 불러올 때 객체형태로 불러와지고, config.json 파일에 있는 객체 형태의 키(development/production)로 하위 내용을 전체 불러오고 있다.

const db = {};
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);
// sequelize 객체를 만드는 코드 (11-17줄) 여기는 규칙이라 그냥 외울 것!)

db.sequelize = sequelize;
db.Sequelize = Sequelize;
// db = {sequelize : sequelize, Sequelize : Sequelize} 지금 db안에는 안에 sequelize가 들어있다.

db.Customer = require('./Customer')(sequelize, Sequelize);
db.Orders = require('./Orders')(sequelize, Sequelize);

// FK 작성해줄 때 FK있는 테이블 먼저 작성 후, 관계성을 생각해서
// 원본 테이블도 적어줘야 한다 즉, 2개가 작성되야한다. 23~33줄
// FK 가 있어서 테이블간 관계를 정의해야하면, model/index에 입력한다!

db.Customer.hasMany(db.Orders, {
  //   onDelete: 'cascade',
  foreignKey: 'custid',
  // sourceKey: 'custid', // 원본 테이블은 targetKey대신 source라 쓴다!
});
// PK 걸리는건 이 파일에서 연결해준다.
db.Orders.belongsTo(db.Customer, {
  //   onDelete: 'cascade',
  foreignKey: 'custid',
  targetKey: 'custid', // targetKey는 원래 쓰지만, 이름이 동일한 경우 생략 가능
});

//참조하고 있는 테이블의 이름이 다른 경우 예시
// db.Orders.belongsTo(db.Customer, {
//   foreignKey: 'custid',
//   targetKey: 'id',
// });

module.exports = db;
