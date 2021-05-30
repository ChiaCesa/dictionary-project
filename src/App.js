import catBanner from './catBanner.jpg';
import './App.css';
import Dictionary from "./Dictionary.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
       
       
      </header>
      <main>
        <Dictionary defaultKeyword="Cat" />
      </main> 
       </div>
      <img src={catBanner} className="App-logo" alt="logo" />
      <footer className="text-center">This project was coded by Chiara Cesana and is <a href="https://github.com/ChiaCesa" target="_blank" rel="noreferrer">open-sourced on GitHub</a></footer>
     
    </div>
  );
}


