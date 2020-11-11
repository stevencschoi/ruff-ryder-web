import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import  { DisplayContextProvider } from './components/context/DisplayContext';

const App = () => {
  return (
    <div className="App">
      <DisplayContextProvider>
        <Header />
        <Main />
        <Footer />
      </DisplayContextProvider>
    </div>
  );
}

export default App;
