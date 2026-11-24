import React, { useState } from "react";

const CoinCollector = () => {
  const [coin, setCoin] = useState(1);
  const [level, setLevel] = useState(1);

  function handlegetcoin() {
    setCoin((prev) => prev + 20);
  }

  function handlelosscoin() {
    setCoin((p) => p - 10);
  }

  function handleJackpot() {
    setCoin((prev) => prev + 50);
  }

  return (
    <>
      <div>coincollector</div>
      <h2>
        coin: {coin}, level: {level}
      </h2>

      <button onClick={handlegetcoin}>get coins</button>
      <button onClick={handlelosscoin}>loss coins</button>
      <button onClick={handleJackpot}>Jackpot</button>

      <pre></pre>
    </>
  );
};

export default CoinCollector;