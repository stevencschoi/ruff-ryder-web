import React, { useState } from 'react';

const DisplayContext = React.createContext({});

const DisplayContextProvider = (props) => {
  const [display, setDisplay] = useState({
    darkMode: true
  });

  const value = {
    display, setDisplay
  };

  return <DisplayContext.Provider value={value}>{props.children}</DisplayContext.Provider>
}

export { DisplayContext, DisplayContextProvider };