import styled from "styled-components";
// css의 네이밍 중복을 방지할 수 있다.
const Container = styled.div`
  display: flex;
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};
`;
// `` 안에서 JS를 쓰려면 ${}를 적고 이 안에 적으면 된다.

export default function StyledComponent() {
  return (
    <>
      <Container>
        <Box color="red" />
        <Box color="orange" />
        <Box color="yellow" />
        <Box color="green" />
        <Box color="blue" />
        <Box color="navy" />
        <Box color="purple" />
      </Container>
    </>
  );
}
