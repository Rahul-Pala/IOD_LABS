import { useState } from "react";
import { useEffect } from "react";


const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  useEffect(() => {
    fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`)
        .then(response => response.json())
        .then(json => {
            setBitcoinPrice(json.bitcoin[currency.toLowerCase()])
            console.log(json.bitcoin[currency.toLowerCase()])
        });
}, [currency]);
  
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>
      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>
      <p>Bitcoin Price</p>
      {bitcoinPrice}
    </div>
  );
} 

export default BitcoinRates
