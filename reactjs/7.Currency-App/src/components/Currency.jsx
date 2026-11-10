import React, { useState } from "react";
import { FaExchangeAlt } from "react-icons/fa";
import "../css/currency.css";
import axios from "axios";

let Base_Url = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_r4O5VYF6dajZEqtHNbuUAvRc3DexZRSZFXn4jan0";

function Currency() {
  const [amount, setAmount] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("TRY");
  const [result, setResult] = useState("");

  const exchange = async () => {
    try {
      const response = await axios.get(
        `${Base_Url}?apikey=${API_KEY}&base_currency=${fromCurrency}`
      );
      const result = (response.data.data[toCurrency] * amount).toFixed(2);
      setResult(result);
    } catch (error) {
      console.log("hata olustu ", error);
    }
  };

  const reverse = async () => {
    let a = result;
    setResult(amount);
    setAmount(a);
  };

  return (
    <div>
      <div className="currency-main">
        <div
          style={{
            backgroundColor: "#5E5D5D",
            width: "100%",
            textAlign: "center",
            borderRadius: "5px",
          }}
        >
          <h3 style={{ fontFamily: "arial", color: "#fff" }}>CURRENCY APP</h3>
        </div>

        <div style={{ marginTop: "20px" }}>
          <input
            id="amount"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="amount-input"
          />
          <select
            onChange={(e) => setFromCurrency(e.target.value)}
            className="first-currency-option"
          >
            <option>USD</option>
            <option>EUR</option>
            <option>TRY</option>
            <option>CNY</option>
            <option>KRW</option>
            <option>BRL</option>
            <option>RUB</option>
            <option>JPY</option>
          </select>
          <FaExchangeAlt
            style={{
              marginRight: "10px",
              cursor: "pointer",
              border: "1px solid black",
            }}
            onClick={reverse}
          />

          <select
            onChange={(e) => setToCurrency(e.target.value)}
            className="second-currency-option"
          >
            <option>TRY</option>
            <option>USD</option>
            <option>EUR</option>
            <option>CNY</option>
            <option>KRW</option>
            <option>BRL</option>
            <option>RUB</option>
            <option>JPY</option>
          </select>

          <input
            value={result}
            onChange={(e) => setResult(e.target.value)}
            type="text"
            className="result-input"
          />
        </div>

        <div className="button-main">
          <button
            style={{
              width: "100px",
              height: "30px",
              border: "none",
              backgroundColor: "blue",
              color: "#fff",
              cursor: "pointer",
              borderRadius: "5px",
              marginTop: "20px",
            }}
            onClick={exchange}
          >
            Çevir
          </button>
        </div>
      </div>
    </div>
  );
}

export default Currency;
