let display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function backspace() {
  let currentValue = display.value;
  display.value = currentValue.slice(0, -1);
}

function clearDisplay() {
  display.value = '';
}

document.addEventListener('keydown', function(event) {
    const key = event.key;
  
    if (key === 'Enter') {
      calculate();
    } else if (key === 'Backspace') {
      backspace();
    } else if (key === 'Escape') {
      clearDisplay();
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
      appendToDisplay(key);
    } else if (key === '.') {
      appendToDisplay('.');
    } else if (!isNaN(key) && key !== ' ') {
      appendToDisplay(key);
    }
  });
  
function calculate() {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}
