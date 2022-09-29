import React from 'react';
import './Form.css'
export default function Form({convert, toCurrencies, value, toCurrency, result, setToCurrency, setValue}) {
    const UAH = "UAH";
    return (
        <div className="container">
            <form onSubmit={convert} className="form decor">
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className ="inputDiv">
                    <label className="inputLabel">UAH:</label>
                    <input value={value} className="input" onChange={(e) => setValue(e.target.value)} />
                </div>
                <div className="inputDiv">
                    <label>To currency:</label>
                    <select
                        value={toCurrency}
                        onChange={(e) => setToCurrency(e.target.value)}
                        className="select"
                    >
                        {toCurrencies.map((c) => (
                            <option key={c}>{c}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="button">convert</button>
            </form>
            <div className="result">
                {value} {UAH} is {result.toFixed(2)} {toCurrency}
            </div>
        </div>
    )
}
