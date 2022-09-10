function randomValue(min = 0, max = 1, precision = 0) {
  const random = Math.random() * (max - min) + min;
  return Number(random.toFixed(precision));
}

function getChanges (price) {
  //add operators to settlements
  let operators = [
    {
      sign: 'INCREMENT',
      method: function(a,b) {return a + b;}
    },
    {
      sign: 'DECREMENT',
      method: function(a,b) {return a - b;}
    }
  ]

  //random define an operator
  let selectedOperator = Math.floor(Math.random()*operators.length);
  //get result depending on the operator
  let res = operators[selectedOperator].method(price, randomValue(15, 30, 0));
  //get changes in percent
  let percent = (res - price)*100/res

  return {
    result: res,
    operator: operators[selectedOperator].sign,
    change: res - price,
    changePercent: percent.toFixed(2)
  }
}

module.exports = {
  getChanges
}