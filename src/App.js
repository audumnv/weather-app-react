import React from "react";
import Weather from "./Weather";
import "./App.css";


export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Lansing" />

        <footer>
           <a
            href="https://github.com/audumnv/weather-app-react"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>
          {" "}
          by {" "}
          <a
            href="https://audumnv.github.io/Portfolio//"
            target="_blank"
            rel="noopener noreferrer"
          >
            Audumn Vernon
          </a>
          
        </footer>
      </div>
    </div>
  );
}