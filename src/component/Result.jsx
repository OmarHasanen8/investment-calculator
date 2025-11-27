import {calculateInvestmentResults ,formatter} from "../util/investment.js";
function Result({input}) { 
 const result = calculateInvestmentResults(input) ; 
 const initialInvestment =  result[0].valueEndOfYear - 
 result[0].interest - 
 result[0].annualInvestment ;
 return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>Interest (year)</th>
          <th>Total interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>

      <tbody>
        {
          result.map((data) => {
            const totalInterest = data.valueEndOfYear -
             data.annualInvestment * data.year -  
             initialInvestment;
             const totalAmountInvested = 
             data.valueEndOfYear - totalInterest ;

      

            return (
              <tr key={data.year}>
                <td>{data.year}</td>

                <td>{formatter.format(data.valueEndOfYear)} </td>

                <td>{formatter.format(data.interest)}</td>

                <td>{formatter.format(totalInterest)}</td>

                <td>{formatter.format(totalAmountInvested)}</td>
              </tr>
            );
          })
        }
      </tbody>
    </table>
  );
}export default Result ;