import React from 'react';
import './Form.css';
import Select from '../Select/Select';
import Input from '../Input/Input';
import PropTypes from 'prop-types';
function Form({convert, toCurrencies, value, toCurrency, result, setToCurrency, setValue}) {
    const UAH = "UAH";
    return (
        <div className="container">
            <form onSubmit={convert} className="form decor">
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className="inputDiv">
                    <label className="inputLabel">UAH:</label>
                  <Input value={value} setValue={setValue}/>
                </div>
                <div className="inputDiv">
                    <label>To currency:</label>
                    <Select toCurrencies={toCurrencies} toCurrency={toCurrency} setToCurrency={setToCurrency}/>
                </div>
                <button type="submit" className="button">convert</button>
            </form>
            <div className="result">
                {value} {UAH} is {result.toFixed(2)} {toCurrency}
            </div>
        </div>
    )
}
Form.propTypes = {
    convert: PropTypes.func,
    toCurrencies: PropTypes.arrayOf(PropTypes.string),
    value: PropTypes.number,
    toCurrency: PropTypes.string,
    result: PropTypes.number,
    setToCurrency: PropTypes.func,
    setValue: PropTypes.func
}
export default Form
