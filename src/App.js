import React, { useMemo, useState } from "react";
import './App.css';
import Form from './Form/Form';


function App() {
  const [value, setValue] = useState(0);
  const [fromCurrency] = useState("");
  const [toCurrency, setToCurrency] = useState("EUR");
  const [currencies] = useState(["EUR", "USD", "GBP"]);
  const [result, setResult] = useState(0);
  const select = document.querySelector('select');
  const objOfCurrencies = {};
  const toCurrencies = useMemo(() => {
    return currencies.filter((c) => c !== fromCurrency);
  }, [currencies, fromCurrency]);
  const convert = async (e) => {
    e.preventDefault();
    const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
    const data = await response.json()
    const result = await data
    objOfCurrencies.USD = result[25]
    objOfCurrencies.GBP = result[24]
    objOfCurrencies.EUR = result[32]
    setResult(+value / +objOfCurrencies[select.value].rate);
  };
  return (
      <div id="wrapper">
       <Form convert={convert}
             toCurrencies={toCurrencies}
             value={value}
             toCurrency={toCurrency}
             result={result}
             setToCurrency={setToCurrency}
             setValue={setValue}
       />
      </div>
  );
}

export default App;
