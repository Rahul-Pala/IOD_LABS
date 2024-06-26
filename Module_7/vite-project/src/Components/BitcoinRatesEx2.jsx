import { useState } from "react";
import { useEffect } from "react";
import { useData } from "./useData";


const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRatesEx2() {
  const [currency, setCurrency] = useState(currencies[0]);
 // const [bitcoinPrice, setBitcoinPrice] = useState(null);

  const data = useData('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies='+currency);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));
console.log(data)
  const bitcoinPrice = data ? (data.bitcoin!=null? data.bitcoin[currency.toLowerCase()]: ""): 'not found'
  //alert(bitcoinPrice)
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

export default BitcoinRatesEx2