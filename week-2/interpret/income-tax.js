function calculateIncomeTax(income) {
  const personalAllowance = 12570;
  const basicRate = 0.2;
  const taxableIncome = income - personalAllowance;

  return taxableIncome * basicRate;
}

const monthlySalary = 1500;
const totalSalary = monthlySalary * 12;
const incomeTax = calculateIncomeTax(totalSalary);
console.log(`My income tax is ${incomeTax}`);
