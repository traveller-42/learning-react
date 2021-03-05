import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p >SIAM</p>
        <Person></Person>
        <Person></Person>
      </header>
    </div>
  );
}

function Person(){
  return (
  <div style={{border:'2px solid red',padding : '2px',margin:'12px'}}>
    <h1>Name : Shakib Al Hasan</h1>
    <h2>He is a very good cricketer</h2>
  </div>
  )
}

export default App;
