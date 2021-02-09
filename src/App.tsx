import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './Components/InputForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <InputForm />
      </div>
    </Router>
  );
}

export default App;
