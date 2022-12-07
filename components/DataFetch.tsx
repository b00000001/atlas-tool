import {useState, useEffect} from 'react';

function DataFetch({coin} : {coin: string}) {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://api.coingecko.com/api/v3/coins/${coin.toLocaleLowerCase()}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, [coin]);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <div>
      <h1>{data.id} Price</h1>
      <h2>{data.market_data ? `$ ${data.market_data.current_price.usd.toFixed(2)}` : 'Price Not Found' }</h2>
    </div>
  );
}

export default DataFetch;
