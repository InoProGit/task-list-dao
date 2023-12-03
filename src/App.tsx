import './input.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import MainRouter from './routers/MainRouter';
import { StrictMode } from "react";


function App() {
  return (
    <StrictMode>
      <div id="app">
        <Header/>
          <div id="wrapper"><MainRouter /></div>
        <Footer/>
      </div>
    </StrictMode>
  );
}

export default App;
