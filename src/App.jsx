import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import TextField from './components/TextField.jsx';
import Chart from './components/Chart.jsx';

function App() {

  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(0);
  const [date, setNewDate] = useState('');
  const [dateInput, setDateInput] = useState('');
  const [submitted, setSubmitted] = useState(false);

  //updates the input variable and ensures that it is an integer, 
  //preventing non numeric or negative numbers from being entered
  const setValue = (e) => {
    let value = parseInt(e.target.value);
    if(Number.isInteger(value)) {
      setUpdate(value);
    } else {
      setUpdate(0);
    }
  }

  const setDate = (e) => {
      setDateInput(e.target.value);
    
  }

  //updates total count and chart as well as resetting update
  const submitUpdate = () => {
    setCount(count + update + 0);
    setData((prev) => [...prev, count+update]);
    setNewDate((prev) = [...prev, dateInput])
    setUpdate('');
    setSubmitted(true);
  }

  return (
    <div className="App">
      <h1>Sleep Tracker</h1>
      <h1>Total Hours Slept: {count}</h1> 
        <h2>Hours: <TextField value={update} onChange={setValue} /></h2>
        <h2>Date: <TextField value={date} onChange={setDate} /></h2>
        <Button label="Update" onClick={submitUpdate} />
      <Chart labels={date} dataPoints={data} />
    </div>
  );
}

export default App;