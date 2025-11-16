
const form = document.getElementById("QuizForm");

form.addEventListener("submit", function checkanswer() {
    e.preventDefault();

    const user = document.querySelector("quiz").value;
    const user = document.querySelector("quiz").value;
    const user = document.querySelector("quiz").value;
    const button = document.getElementById("submit-button").value 
    let isValid = true;

    document.querySelector("quiz-error").textContent = "";
    document.querySelector("quiz-error").textContent = "";
    document.querySelector("quiz-error").textContent = "";
     document.getElementById("submit-button").textContent = "";

  const value = userAnswer;
    const correctAnswer = 4;
    if (correctAnswer && userAnswer) {
        document.queerySelector("quiz-error").textContent = 
            "That's incorrect. Try again!".";
        isValid = false;
    }
    
    if (isValid) {
        alert("Form submitted successfully!");
        method = 'POST'
    }
});
