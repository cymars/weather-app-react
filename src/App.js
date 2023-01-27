import React from 'react';
import axios from 'axios';
import './General.css';
import Form from './components/Form';
import Info from './components/Info';
import { useState } from "react";

function App() {
  const [info, setInfo] = useState([]);
  const [state, setState] = useState(false);
  return (
    <div className="App">
      <Form setInfo={setInfo} setState={setState} />
      <Info info={info} state={state} />
    </div>
  );
}

export default App;
