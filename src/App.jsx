import Header from './component/Header.jsx';
import User_input from './component/User_input.jsx';
import Result  from './component/Result.jsx';

import { calculateInvestmentResults } from './util/investment.js';
import React, { useState } from 'react';

function App() { 
  const [userInput , setUserInput] = useState({ 
    initialInvestment : 10000,
    annualInvestment : 1200,
    expectedReturn : 6,
    duration : 10,
  });
const isvalid = userInput.duration >=1 ; 
  function handleChange(inputIdentifier , newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: newValue === "" ? "" : +newValue
      };
    });
  }

  return (
    <>
      <Header/> 
      <User_input userInput={userInput} onChange={handleChange}/>
      { !isvalid && <p className='center'>Please enter a valid duration (at least 1 year).</p>}
      { isvalid && <Result input={userInput}/> }
    </>
  );
}

export default App;
