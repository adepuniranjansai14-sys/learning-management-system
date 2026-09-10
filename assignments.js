function openUpload(taskTitle) {
    const uploadBox = document.getElementById("upload-box");
    const currentTask = document.getElementById("current-task");
    
    uploadBox.style.display = "block";
    currentTask.innerText = taskTitle;
    uploadBox.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener("DOMContentLoaded", () => {
    const assignmentForm = document.getElementById("assignment-form");
    if (assignmentForm) {
        assignmentForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Project submission received!");
            
            const taskStatus = document.getElementById("status-task");
            if (taskStatus) {
                taskStatus.className = "badge badge-success";
                taskStatus.innerText = "Submitted";
            }

            document.getElementById("upload-box").style.display = "none";
        });
    }
});