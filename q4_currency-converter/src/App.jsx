import { useState } from "react";
import "./App.css";

function App() {
  const [amount, setAmount] = useState("");
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [result, setResult] = useState("");

  const convertCurrency = async () => {
    if (amount === "") {
      alert("Enter Amount");
      return;
    }

    const response = await fetch(
      `https://api.exchangerate-api.com/v4/latest/${from}`
    );

    const data = await response.json();

    const rate = data.rates[to];

    const convertedAmount = amount * rate;

    setResult(convertedAmount.toFixed(2));
  };

  return (
    <div className="container">
      <h1>Currency Converter</h1>

      <input
        type="number"
        placeholder="Enter Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />

      <div className="select-box">
        <div>
          <label>From</label>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>

        <div>
          <label>To</label>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            <option>INR</option>
            <option>USD</option>
            <option>EUR</option>
            <option>GBP</option>
            <option>JPY</option>
          </select>
        </div>
      </div>

      <button onClick={convertCurrency}>
        Convert
      </button>

      {result && (
        <h2>
          {amount} {from} = {result} {to}
        </h2>
      )}
    </div>
  );
}

export default App;