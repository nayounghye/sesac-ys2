exports.getUser = () => {
  const id = 'jordy';
  const pw = '1234';
  // 이 함수를 밖에서 쓸 수 있도록 return을 해줘야 한다.
  return { id, pw };
};
