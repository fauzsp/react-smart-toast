import './App.css';
import ToastContainer from './components/ToastContainer';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ToastContainer
          defaultToasts={[
            { id: Date.now(), message: "Operation Successful!", type: "success" },
            { id: Date.now() + 1, message: "Something went wrong!", type: "error" },
            { id: Date.now() + 2, message: "Here’s some info for you!", type: "info" },
            { id: Date.now() + 3, message: "Warning! Check your input.", type: "warning" },
          ]}
          customStyles={{  
            position: "fixed",
            bottom: "0",
            display: "flex",
            right: "10px",
            flexDirection: "column",
            gap: "10px",
          }}
        />
      </header>
    </div>
  );
}

export default App;
