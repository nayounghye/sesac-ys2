const { commentInfos } = require('../model/Comment');

// 여러개의 함수를 exports하는 방법-1
exports.main = (req, res) => {
  res.render('index');
};

// 여러개의 함수를 exports하는 방법-2
//module.exports = {};

exports.guest = (req, res) => {
  const commentData = commentInfos();
  res.render('guest', {
    commentInfos: commentData,
  });
};
