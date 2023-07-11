import React, { useState } from 'react';
import './style.css';

const LoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState('');
  const [noOfYears, setNoOfYears] = useState('');
  const [roi, setRoi] = useState('');
  const [emi, setEmi] = useState(0);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const interestRate = parseFloat(roi) / 100 / 12;
    const numberOfPayments = parseFloat(noOfYears) * 12;

    const calculatedEmi =
      (principal * interestRate * Math.pow(1 + interestRate, numberOfPayments)) /
      (Math.pow(1 + interestRate, numberOfPayments) - 1);

    setEmi(calculatedEmi.toFixed(2));
  };

  return (
    <div className="loan-calculator">
      <InputField
        label="Loan Amount"
        value={loanAmount}
        onChange={e => setLoanAmount(e.target.value)}
      />
      <InputField
        label="No of Years"
        value={noOfYears}
        onChange={e => setNoOfYears(e.target.value)}
      />
      <InputField
        label="ROI"
        value={roi}
        onChange={e => setRoi(e.target.value)}
      />
      <Button onClick={calculateEMI} label="Calculate" />
      <Results emi={emi} />
    </div>
  );
};

const InputField = ({ label, value, onChange }) => (
  <div className="input-field">
    <label>{label}</label>
    <input type="number" value={value} onChange={onChange} />
  </div>
);

const Button = ({ onClick, label }) => (
  <button onClick={onClick}>{label}</button>
);

const Results = ({ emi }) => (
  <div className="results">
    <h2>EMI: {emi}</h2>
    
  </div>
);

export default LoanCalculator;
