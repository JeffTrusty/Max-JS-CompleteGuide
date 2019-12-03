let currentResult = 0;
let logEntries = [];

function getNumberEntered() {
  return parseInt(userInput.value);
}
function createDescription(operator, beforeValue, valueOperatingOn) {
  const calcDescription = `${beforeValue} ${operator} ${valueOperatingOn}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  OperationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: OperationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function add() {
  const numberEntered = getNumberEntered();
  const initialResult = currentResult;
  currentResult += numberEntered;
  createDescription('+', initialResult, currentResult);
  writeToLog('ADD',initialResult, numberEntered, currentResult);
}

function subtract() {
  const numberEntered = getNumberEntered();
  const initialResult = currentResult;
  currentResult -= numberEntered;
  createDescription('-', initialResult, currentResult);
  writeToLog('SUBTRACT',initialResult, numberEntered, currentResult);
}

function multiply() {
  const numberEntered = getNumberEntered();
  const initialResult = currentResult;
  currentResult *= numberEntered;
  createDescription('*', initialResult, currentResult);
  writeToLog('MULTIPLY',initialResult, numberEntered, currentResult);
}

function divide() {
  const numberEntered = getNumberEntered();
  const initialResult = currentResult;
  currentResult /= numberEntered;
  createDescription('/', initialResult, currentResult);
  writeToLog('DIVIDE',initialResult, numberEntered, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
