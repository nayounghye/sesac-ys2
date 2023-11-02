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
module.exports = User;
