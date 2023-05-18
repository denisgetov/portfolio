import logo from './logo.svg';
import './App.css';
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Hello
          {/* <Link to="/Jeff">
          <button>Go to Jeffs page</button>
            </Link> */}
        </a>
        <h1 className='hello'>hello</h1>
<div>
  <button>Hello</button>
  <div>Testing to see if gitpod works</div>
</div>
      </header>
    </div>
  );
}

export default App;
