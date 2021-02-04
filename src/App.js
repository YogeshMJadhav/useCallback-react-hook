import React, { useState, useCallback } from 'react';
import './App.css';
import Title from './Components/Title';
import Count from './Components/Count';
import Button from './Components/Button';

function App() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(25000);

  const incrementAge = useCallback(() => {
    setAge(age + 5);
  }, [age])

  const salaryIncrement = useCallback(() => {
    setSalary(salary + 5000);
  }, [salary])

  return (
    <div className="App">
      <Title />
      <Count text="age" count={age} />
      <Button handleClick={incrementAge}> Increment Age</Button>
      <Count text="salary" count={salary} />
      <Button handleClick={salaryIncrement}> Salary Increment</Button>
    </div>
  );
}

export default App;
