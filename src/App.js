import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p >SIAM</p>
        <Person name="Rubel Hossain" position="Bowler"></Person>
        <Person name="Shakib Al Hasan" position="All-Rounder"></Person>
        <Person name="Tamim Iqbal" position="Batsman"></Person>
        <Person name="Mahmudullah Riyad" position="Batsman"></Person>
      </header>
    </div>
  );
}

function Person(props){
  return (
  <div style={{border:'2px solid red',padding : '2px',margin:'12px'}}>
    <h1>Name : {props.name}</h1>
    <h2>Position : {props.position}</h2>
  </div>
  )
}

export default App;
