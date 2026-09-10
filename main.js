document.addEventListener("DOMContentLoaded", () => {
    // Course Enrollment Logic
    const enrollButtons = document.querySelectorAll(".enroll-btn");
    enrollButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const course = e.target.getAttribute("data-course");
            alert(`Successfully enrolled in: ${course}`);
        });
    });

    // Login Form Navigation Mock
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Login verified! Redirecting to dashboard...");
            window.location.href = "dashboard.html";
        });
    }
});

function changeLesson(title) {
    const el = document.getElementById("lesson-title");
    if (el) el.innerText = title;
}