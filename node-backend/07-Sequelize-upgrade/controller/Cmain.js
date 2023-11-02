const { Customer, Orders, Sequelize } = require('../model');

const Op = Sequelize.Op; // operators를 담은 명령어
// operators를 안쓰면 where로 조회할 때 일치하는것(=)만 찾을 수 있음.
// operators를 쓰면 <,>,포함 등 다양하게 조건을 두고 찾을 수 있음!

exports.main = async (req, res) => {
  const cust = await Customer.findAll({
    attributes: ['custid', 'custname'],
    where: { birth: { [Op.gte]: '2000-01-01' } },
    include: [
      {
        // 테이블이 여러개인 경우 배열로 들어감
        model: Orders,
        attributes: { exclude: ['custid'] },
        // where:{}
      },
    ],
    // raw: true, // 조회할 때 row값 줘서 편하게 볼 수 있게 해주는 명령어
  });

  res.send(cust);
};

// exports.main = async (req, res) => {
//   // customer의 주문 목록과 이름(custname)을 같이 보고싶을 땐?
//   const orders = await Orders.findAll();
//   res.send(orders);
// };
