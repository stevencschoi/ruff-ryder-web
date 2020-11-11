import React, { useState } from 'react';
import Input from './partials/Input';

const Form = () => {
  const [formInputs, setFormInputs] = useState({
    start: '',
    destination: '',
  })

  const clearInputs = () => {
    setFormInputs(() => ({
      start: '',
      destination: ''
    }))
  }

  const handleBlur = (e) => {
    setFormInputs((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formInputs);
    clearInputs();
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Where go?</h2>
      <Input name={'start'} type={'text'} onBlur={handleBlur} placeholder='Start' />
      <Input name={'destination'} type={'text'} onBlur={handleBlur} placeholder='Destination' />
      <button type='submit'>What do?</button>
    </form>
  )
}

export default Form;
