import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 20px 0;
`;

const Back = styled.div`
  background-color: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  font-weight: bold;
  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
`;

function Coin() {
  const { coinId } = useParams();
  return (
    <Container>
      <Back>
        <Link to={"/"}>뒤로가기</Link>
      </Back>
      <h1> Coin: {coinId} </h1>
    </Container>
  );
}

export default Coin;
