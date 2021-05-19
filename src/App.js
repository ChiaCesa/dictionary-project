import catBanner from './catBanner.jpg';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1> Welcome to Dictionary app!</h1>
        <img src={catBanner} className="App-logo" alt="logo" />
        
      </header>
    </div>
  );
}


