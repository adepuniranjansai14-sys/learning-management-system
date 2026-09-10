function updateProgress(progressBarId, percentTextId) {
    const progressBar = document.getElementById(progressBarId);
    const percentText = document.getElementById(percentTextId);

    if (!progressBar || !percentText) return;

    let width = parseInt(progressBar.style.width) || 0;

    if (width < 100) {
        width += 20;
        if (width > 100) width = 100;

        progressBar.style.width = width + "%";
        percentText.innerText = width + "%";

        if (width === 100) {
            alert("Congratulations! Module finished completely!");
        }
    } else {
        alert("This module is already at 100%!");
    }
}