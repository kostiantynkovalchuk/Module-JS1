function parse(num) {
  return Number(num.replaceAll(",", ""));
}

function getPercentageChange(originalAmount, newAmount) {
  const change = newAmount - originalAmount;
  const percentageChange = (change / originalAmount) * 100;
  return percentageChange.toFixed(2);
}

console.log(getPercentageChange(parse("4,324"), parse("3,679")));
