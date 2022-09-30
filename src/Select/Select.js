import React from 'react';
import './Select.css';
import PropTypes from 'prop-types';
function Select({toCurrency , toCurrencies , setToCurrency}) {
    return (
        <select
            value={toCurrency}
            onChange={(e) => setToCurrency(e.target.value)}
            className="select"
        >
            {toCurrencies.map((c) => (
                <option key={c}>{c}</option>
            ))}
        </select>
    )
}
Select.propTypes = {
    toCurrency: PropTypes.string,
    toCurrencies: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Select
