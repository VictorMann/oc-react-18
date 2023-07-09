import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';

import { Template } from './Components';
import Header from './Components/Header';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
        <Footer />
      </Template>
    </BrowserRouter>
  );
}

export default App;
