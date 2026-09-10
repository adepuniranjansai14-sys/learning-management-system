document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("create-course-form");
    const courseList = document.getElementById("course-list");

    if (form) {
        form.addEventListener("submit", (e) => {
            e.preventDefault();

            const title = document.getElementById("new-title").value;
            const li = document.createElement("li");
            li.innerText = `${courseList.children.length + 1}. ${title}`;
            courseList.appendChild(li);

            alert(`Course "${title}" added to active course catalog!`);
            form.reset();
        });
    }
});