import logo from './logo.svg';
import './App.css';

function App() {
  var name = {
    name : "Md Siamul Isalm",
    profession:"React Developer",
    adress : "11,shahjalal road ,konapara,demra,dhaka"
  }
  var myStyle={
    color: "red",
    backgroundColor:'yellow'
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit done <code>src/App.js</code> and save to reload.
        </p>
        <h1 style={myStyle}>My Heading : {name.adress}</h1>
        <p style={{color:'black', backgroundColor:'white'}}>My first React Project</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Click Here
        </a>
      </header>
    </div>
  );
}

export default App;
