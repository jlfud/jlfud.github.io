document.addEventListener('DOMContentLoaded', () => {
    console.log("Welcome to Jason Fu's simple website!");
    
    let yearSpan = document.getElementById("currentYear");
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
