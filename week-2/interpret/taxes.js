function calculateIncomeTax(income) {
  // Tax bands and rates for the tax year 2021-2022 (up to £50,270)
  const personalAllowance = 12570;
  const basicRateThreshold = 50270;
  const basicRate = 0.2;
  const higherRateThreshold = 150000;
  const higherRate = 0.4;

  // Calculate taxable income
  const taxableIncome = income - personalAllowance;

  // Calculate income tax
  let incomeTax = 0;

  if (taxableIncome <= personalAllowance) {
    incomeTax = 0; // Below the personal allowance, no tax is payable
  } else if (taxableIncome <= basicRateThreshold) {
    incomeTax = taxableIncome * basicRate;
  } else if (taxableIncome <= higherRateThreshold) {
    const basicTax = basicRateThreshold * basicRate;
    const higherTaxableIncome = taxableIncome - basicRateThreshold;
    const higherTax = higherTaxableIncome * higherRate;
    incomeTax = basicTax + higherTax;
  } else {
    const basicTax = basicRateThreshold * basicRate;
    const higherTax = (higherRateThreshold - basicRateThreshold) * higherRate;
    const additionalTaxableIncome = taxableIncome - higherRateThreshold;
    const additionalRate = 0.45;
    const additionalTax = additionalTaxableIncome * additionalRate;
    incomeTax = basicTax + higherTax + additionalTax;
  }

  return incomeTax;
}

const monthlySalary = 1500;
const totalSalary = monthlySalary * 12;
const incomeTax = calculateIncomeTax(totalSalary);
console.log(`My income tax is £${incomeTax.toFixed(2)}`);
