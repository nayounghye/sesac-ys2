import styled from "styled-components";
// css의 네이밍 중복을 방지할 수 있다.
const Container = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    display: block;
  }
`;
const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.color || "black"};

  &:hover {
    transform: scale(1.2);
  }
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
