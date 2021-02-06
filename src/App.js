import React from 'react';
import { Route } from "react-router-dom";
import Gallery from "./containers/Galleries/Galleries";
import './App.css';

function App() {
  return (
    <div className="App">
      <Route to='/' component={Gallery} />
    </div>
  );
}

export default App;
