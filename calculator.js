
const form = document.getElementById("CalculatorForm");

form.addEventListener("submit", function add(number1, number2) {
                                      return number1 + number2;
    e.preventDefault();

    const number1 = document.getElementById("number1").value;
    const number2 = document.getElementById("number2").value;
    const calculator-result = document.getElementById("calculator-result").value;
    const submit=button = document.querySeletor("quiz-button").value
     
    let result = "";

    document.getElementById("number1").textContent = "";
    document.getElementById("number2").textContent = "";
    document.getElementById("calculator-result").textContent = "";

  document.getElementById('add').addEventListener('click', function() {
    const number1 = parseFloat(document.getElementById('number1').value) || 0;
    const number2 = parseFloat(document.getElementById('number2').value) || 0;
    const result = add(number1, number2);
    document.getElementById('calculation-result').textContent = result;
});
    
    if (result) {
        alert("Form submitted successfully!");
    }
});
