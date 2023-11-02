function Customer(Sequelize, DataTypes) {
  return Sequelize.define(
    // 모델(테이블) 정의, sequelize 객체의 define 메소드를 이용해 정의한다.
    'customer', // 테이블 이름
    {
      custid: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      custname: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      addr: {
        type: DataTypes.STRING(10),
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING(11),
      },
      birth: {
        type: DataTypes.DATE,
      },
    }, // 컬럼 정의 (실제 컬럼의 이름을 적어야함!)
    {
      // 부가적인 테이블에 대한 옵션
      tableName: 'customer',
      freezeTableName: true,
      timestamps: false, // 기본값 : true
    }
  );
}

module.exports = Customer;
