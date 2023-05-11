import React from "react";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { styled } from "styled-components";
import { fetchCoins } from "../api";

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  color: ${(props) => props.theme.textColor};
  border-radius: 15px;
  margin-bottom: 10px;
  border: 1px solid;
  display: flex;
  align-items: center;
  img {
    width: 50px;
    height: 50px;
    margin-left: 10px;
  }
  a {
    transition: color 0.2s ease-in;
    display: block;
    padding: 20px;
  }
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
  font-size: 48px;
`;

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex-hex",
//     name: "HEX",
//     symbol: "HEX",
//     rank: 3,
//     is_new: false,
//     is_active: true,
//     type: "token",
//   },
// ];

interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const { isLoading, data } = useQuery<CoinInterface[]>("allCoins", fetchCoins);
  //   const [coins, setCoins] = React.useState<CoinInterface[]>([]);
  //   const [loading, setLoading] = React.useState(true);
  //   React.useEffect(() => {
  //     (async () => {
  //       const response = await fetch("https://api.coinpaprika.com/v1/coins");
  //       const json = await response.json();
  //       setCoins(json.slice(0, 7));
  //       setLoading(false);
  //     })();
  //   }, []);
  return (
    <Container>
      <Header>
        <Title>Coins</Title>
      </Header>

      {isLoading ? (
        "Loading..."
      ) : (
        <CoinsList>
          {data?.slice(0, 7).map((coin) => {
            return (
              <Coin key={coin.id}>
                <img
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={`${coin.name}`}
                />
                <Link
                  to={{
                    pathname: `/${coin.id}`,
                  }}
                  state={coin}
                >
                  {coin.name} &rarr;
                </Link>
              </Coin>
            );
          })}
        </CoinsList>
      )}
    </Container>
  );
}
export default Coins;
