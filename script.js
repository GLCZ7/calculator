let outputElement = document.getElementById('output');
let currentInput = '';

function appendToOutput(value) {
    currentInput += value;
    outputElement.textContent = currentInput;
  }

  function clearOutput() {
    currentInput = '';
    outputElement.textContent = '0';
  }
  function deletechar() {
    currentInput = currentInput.slice(0, -1);
    if (currentInput === '') {
        currentInput = '0'; 
    }
    outputElement.textContent = currentInput;
}
  function calculate() {
    try {
      currentInput = eval(currentInput).toString();
      outputElement.textContent = currentInput;
    } catch (error) {
      outputElement.textContent = 'Error';
    }
  }