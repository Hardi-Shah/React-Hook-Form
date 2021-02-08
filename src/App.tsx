import React from 'react';
import logo from './logo.svg';
import './App.css';
import InputForm from './Components/InputForm';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Components/Header/Header';
import HeadLine from './Components/HeadLine/HeadLine';

function App() {
  return (
    <Router>
      <div className="App">
        <InputForm />
        <Header/>
        <HeadLine/>
      </div>
    </Router>
  );
}

export default App;
