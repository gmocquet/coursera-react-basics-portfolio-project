function createOperationHandler(operation) {
  function ensureNumeric(value) {
    const num = Number(value);
    return isNaN(num) ? 0 : num;
  }

  return function(currentValue, newValue) {
    currentValue = ensureNumeric(currentValue);
    newValue = ensureNumeric(newValue);

    switch (operation) {
      case '+':
        return currentValue + newValue;
      case '-':
        return currentValue - newValue;
      case '*':
        return currentValue * newValue;
      case '/':
        if (newValue === 0) {
          return "Can't divide number by zero";
        }
        return currentValue / newValue;
      default:
        throw new Error('Unknown operation');
    }
  }
}

export default createOperationHandler;
