export const prettyNumber = (amount: number) => {
  
  if (amount < 0.0000000000001) {
      amount = Math.round(amount * 1000000000000000) / 1000000000000000
  } else if (amount < 0.000000000001) {
      amount = Math.round(amount * 100000000000000) / 100000000000000
  } else if (amount < 0.00000000001) {
      amount = Math.round(amount * 10000000000000) / 10000000000000
  } else if (amount < 0.0000000001) {
      amount = Math.round(amount * 1000000000000) / 1000000000000
  } else if (amount < 0.000000001) {
      amount = Math.round(amount * 100000000000) / 100000000000
  } else if (amount < 0.00000001) {
      amount = Math.round(amount * 10000000000) / 10000000000
  } else if (amount < 0.0000001) {
      amount = Math.round(amount * 1000000000) / 1000000000
  } else if (amount < 0.000001) {
      amount = Math.round(amount * 100000000) / 100000000
  } else if (amount < 0.00001) {
      amount = Math.round(amount * 10000000) / 10000000
  } else if (amount < 0.0001) {
      amount = Math.round(amount * 1000000) / 1000000
  } else if (amount < 0.001) {
      amount = Math.round(amount * 100000) / 100000
  } else if (amount < 0.01) {
      amount = Math.round(amount * 10000) / 10000
  } else if (amount < 0.1) {
      amount = Math.round(amount * 1000) / 1000
  } else if (amount < 1) {
      amount = Math.round(amount * 100) / 100
  } else if (amount < 10) {
      amount = Math.round(amount * 100) / 100
  } else if (amount < 100) {
      amount = Math.round(amount * 10) / 10
  } else {
      amount = Math.round(amount)
  }

  return amount;
}









export const prettyNumber10 = (num: number) => {
    if (Number.isInteger(num) && num < 10 && num >= 0) {
        return num.toFixed(1);
    }
    return num.toString();
}
