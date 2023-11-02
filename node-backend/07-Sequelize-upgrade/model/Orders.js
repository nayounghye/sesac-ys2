function Orders(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해 정의한다.
    'orders', // 테이블 이름
    {
      orderid: {
        //int NOT NULL AUTO_INCREMENT PRIMARY KEY, 이걸 아래에 객체형태로 표현!(12-15줄)
        type: DataTypes.INTEGER,
        allowNull: false, // 기본값 : true
        primaryKey: true, // 기본값 : false
        autoIncrement: true, // 기본값 : false
      },
      custid: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      prodname: {
        type: DataTypes.STRING(6),
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, // 컬럼 정의 (실제 컬럼의 이름을 적어야함!)
    {
      // 부가적인 테이블에 대한 옵션
      tableName: 'orders',
      freezeTableName: true,
      timestamps: false, // 기본값 : true
    }
  );
}

module.exports = Orders;
