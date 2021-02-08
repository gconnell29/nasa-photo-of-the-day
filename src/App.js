import React from "react";
import Header from "./components/header";
import PhotoList from "./components/photoList";
import "./App.css";
import "./custom.css";

function App() {
  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p> */}
      <Header />
      <PhotoList />
    </div>
  );
}

export default App;
