import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./ButtonComponent";
import ImageComponent from "./ImageComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <div className="App">
          <h1>My React App</h1>
          <ButtonComponent text="Clicami" />
          <ImageComponent
            src="https://images.unsplash.com/photo-1700573941847-d42179081698?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
            alt="elefante"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
