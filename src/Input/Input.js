import React from 'react';
import './Input.css';
import {connect} from 'react-redux';
import PropTypes from 'prop-types'

const Input = ({value, setValue}) => {
    return (
        <input value={value} className="input" onChange={(e) => setValue(e.target.value)}/>
    )
}

Input.propTypes = {
    value: PropTypes.number,
    setValue: PropTypes.func
}

const mapStateToProps = state => {
    return {
        syncValue: state.value.value
    }
}

export default connect(mapStateToProps, null)(Input)
