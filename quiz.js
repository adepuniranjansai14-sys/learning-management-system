document.addEventListener("DOMContentLoaded", () => {
    const quizForm = document.getElementById("quiz-form");
    const resultDiv = document.getElementById("quiz-result");

    if (quizForm) {
        quizForm.addEventListener("submit", (e) => {
            e.preventDefault();

            let score = 0;
            if (quizForm.q1.value === "flex") score += 50;
            if (quizForm.q2.value === "map") score += 50;

            resultDiv.style.display = "block";
            resultDiv.innerText = `Final Score: ${score}/100`;
            resultDiv.style.color = score === 100 ? "green" : "red";
        });
    }
});