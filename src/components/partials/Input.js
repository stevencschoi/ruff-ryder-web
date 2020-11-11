import React, { useState } from 'react'

export default function Input(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    if (props.onChange) props.onChange(inputValue);
  }

  return <input type={props.type} name={props.name} id={props.id} className={props.class} aria-label={props.ariaLabel} required={props.required} disabled={props.disabled} onChange={handleInputChange} onBlur={props.onBlur} value={props.value} placeholder={props.placeholder} />
}
