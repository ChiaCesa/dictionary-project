import catBanner from './catBanner.jpg';
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       <h1> Welcome to Dictionary app!</h1>
        <img src={catBanner} className="App-logo" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="text-center">Coded by Chiara Cesana</footer>
      </div>
    </div>
  );
}


