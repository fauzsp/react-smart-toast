import { ToastContainer } from "react-smart-toast";

function App() {
  return (
    <div>
      <h1>React Smart Toast Demo</h1>
      <h2>hello world</h2>
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
            right: "10px",
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        />
    </div>
  );
}

export default App;
