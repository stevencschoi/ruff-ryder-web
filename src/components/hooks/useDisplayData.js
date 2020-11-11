import { useContext } from 'react';
import { DisplayContext } from '../context/DisplayContext';

export const useDisplayData = () => {
  const { display, setDisplay } = useContext(DisplayContext);

  const toggleTheme = () => {
    setDisplay((prev) => ({
      ...prev,
      darkMode: !display.darkMode,
    }));
    console.log(display.darkMode);
  };

  return { display, toggleTheme }
}