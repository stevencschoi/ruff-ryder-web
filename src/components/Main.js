import React from 'react';
import Form from './Form';

import { useDisplayData } from './hooks/useDisplayData';

export default function Main() {
  const { display, toggleTheme } = useDisplayData();
  console.log(display);
  return (
    <main className={display.darkMode ? 'dark' : 'light'}>
      <Form />
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </main>
  )
}
