import React from "react";
import Button from "./components/button/button";
import ExampleNavbar from "./components/navbar/example-navbar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ExampleNavbar />
      <Button variant="filled">hello</Button>
    </div>
  );
}

export default App;
