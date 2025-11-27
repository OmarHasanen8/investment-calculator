import { useState } from "react";
function User_input({onChange,userInput}){  
   
  
return (
  <section id="user-input">
      <div className="input-group">
 
        <p>
          <label>INITIAL INVESTMENT</label>
          <input 
          type="number" 
          aria-label="INITIAL INVESTMENT" 
          placeholder="0" 
          value={ userInput.initialInvestment} 
          onChange={(event) => 
          onChange('initialInvestment',event.target.value)}  
          required />
        </p>

        <p>
          <label>ANNUAL INVESTMENT</label>
          <input type="number" 
          required
          value = {userInput.annualInvestment}
           aria-label="ANNUAL INVESTMENT" 
           placeholder="0" 
           onChange={(event)=>
           onChange('annualInvestment',event.target.value)
           }/>
        </p>
</div> 
 <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input type="number" 
           aria-label="EXPECTED RETURN" 
           value = {userInput.expectedReturn }
           placeholder="0" 
           onChange={(event)=>
           onChange('expectedReturn',event.target.value)} 
           required/>
        </p>

        <p>
          <label>DURATION</label>
          <input type="number"
           aria-label="DURATION"  
           value = {userInput.duration}
           placeholder="0"  
           onChange={
(event)=>
           onChange('duration',event.target.value)
           }
            required/>
        </p>

      </div>
    </section>



)  
}
export default User_input 