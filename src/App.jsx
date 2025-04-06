import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button.jsx';
import TextField from './components/TextField.jsx';
import RadioButtons from './components/RadioButtons.jsx';
import Chart from './components/Chart.jsx';

function App() {

  //set variables, data and labels for transfering data to chart
  //count keeps track of total count, update uses a temporary var for input
  //option switches between pounds lost and miles ran
  //radio options is used to switch between the two states
  const [data, setData] = useState([]);
  const [labels, setLabels] = useState([]);
  const [count, setCount] = useState(0);
  const [update, setUpdate] = useState(0);
  const [option, setOption] = useState('Miles Ran');
  const radioOptions = [
    { label: 'Miles Ran', value: 'Miles Ran'},
    { label: 'Pounds Lost', value: 'Pounds Lost'}
  ];

  //Radio button controls this and resets all variables
  const handleOptionChange = (event) => {
    setOption(event.target.value);
    setData([]);
    setLabels([]);
    setCount(0);
  };

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

  //updates total count and chart as well as resetting update
  const submitUpdate = () => {
    setCount(count + update + 0);
    const newLabel = new Date().toLocaleTimeString();
    setLabels(prev => [...prev, newLabel]);
    setData((prev) => [...prev, count+update]);
    setUpdate('');
  }

  return (
    <div className="App">
      <h1>Fitness Goal Tracker</h1>
      <h1>Total {option}: {count}</h1>
      <RadioButtons
        name="radioGroup"
        options={radioOptions}
        selectedValue={option}
        onChange={handleOptionChange}
      /> 
      <h2>{option} Today: <TextField value={update} onChange={setValue}/></h2>
      <Button label="Update" onClick={submitUpdate} />
      <Chart labels={labels} dataPoints={data} option={option} />
    </div>
  );
}

export default App;