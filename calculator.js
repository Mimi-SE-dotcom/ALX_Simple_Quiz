// Arithmetic functions
function add(number1, number2) {
    return number1 + number2;
}

function subtract(number1, number2) {
    return number1 - number2;
}

function multiply(number1, number2) {
    return number1 * number2;
}

function divide(number1, number2) {
    if (number2 === 0) {
        return "Error: Division by zero";
    }
    return number1 / number2;
}

// Helper to get input values as numbers, default to 0
function getInputValues() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    return [number1, number2];
}

// Update result display
function updateResult(value) {
    document.getElementById('calculation-result').textContent = value;
}

// Event listeners for each button
document.getElementById('add').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    const result = add(num1, num2);
    updateResult(result);
});

document.getElementById('subtract').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    const result = subtract(num1, num2);
    updateResult(result);
});

document.getElementById('multiply').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    const result = multiply(num1, num2);
    updateResult(result);
});

document.getElementById('divide').addEventListener('click', function() {
    const [num1, num2] = getInputValues();
    const result = divide(num1, num2);
    updateResult(result);
});