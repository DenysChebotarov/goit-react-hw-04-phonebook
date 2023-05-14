import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css'

export default function Filter({value, handleChange}) {
  return (
    <input className={css.input} name = 'filter' type="text" value = {value} onChange = {handleChange} />
  )
}
Filter.propTypes = {
  value : PropTypes.string,
  handleChange : PropTypes.func,
}