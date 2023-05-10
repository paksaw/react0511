import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { styled } from "styled-components";

const Back = styled.div`
  width: 100px;
  height: 30px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
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
    <>
      <Back>
        <Link to={"/"}>뒤로가기</Link>
      </Back>
      <h1> Coin: {coinId} </h1>
    </>
  );
}

export default Coin;
