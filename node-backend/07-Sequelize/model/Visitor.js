// 테이블의 구조를 정의한다.
// orm은 객체와 db와 table을 매핑하는 기술을 의미한다.
// sequelize를 이용해서 table의 구조를 정의할 필요가 있다.

function Visitor(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해 정의한다.
    'visitor', // 테이블 이름
    {
      id: {
        //int NOT NULL AUTO_INCREMENT PRIMARY KEY, 이걸 아래에 객체형태로 표현!(12-15줄)
        type: DataTypes.INTEGER,
        allowNull: false, // 기본값 : true
        primaryKey: true, // 기본값 : false
        autoIncrement: true, // 기본값 : false
      },
      username: {
        // varchar(10)
        type: DataTypes.STRING(10),
      },
      comment: {
        // mediumtext
        type: DataTypes.TEXT('medium'),
      },
    }, // 컬럼 정의 (실제 컬럼의 이름을 적어야함!)
    {
      // 부가적인 테이블에 대한 옵션
      tableName: 'visitor',
      freezeTableName: true,
      // sequelize에서 sql문을 날릴 때 간혹 단수로 지정해둔 테이블 이름을 복수로 변경하는 경우가 있다.
      // 직접적으로 insert문을 쓰지 않고, create 메소드로 사용할 것이다. 이 메소드를 사용할 때 위 같은 경우가 발생할 수 있음.
      // 이를 방지하는게 freezeTableName이다. freezeTableName:true => 테이블명을 프리즈, 고정하겠다는 뜻.
      timestamps: false, // 기본값 : true
      // timestamps : insert, update 시 그 시간을 자동으로 저장한다. (insertAt, updateAt이라는 테이블을 만들어서 자동 저장함.. 이게 오류발생 초래하는 경우가 있음.)
      // 시간을 저장하지 않도록 false로 지정해둠!
    }
  );
}

function User(Sequelize, DataTypes) {
  return Sequelize.define(
    'user',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      userid: {
        allowNull: false,
        type: DataTypes.STRING(20),
      },
      name: { allowNull: false, type: DataTypes.STRING(10) },
      pw: { allowNull: false, type: DataTypes.STRING(20) },
    },
    {
      tableName: 'user',
      freezeTableName: true,
      timestamps: false,
    }
  );
}

module.exports = Visitor;
