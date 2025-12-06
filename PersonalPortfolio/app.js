// THEME TOGGLE
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeBtn.textContent = 
        document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

const menuToggle = document.getElementById("menu-toggle");
const navList = document.querySelector(".nav-list");

menuToggle.addEventListener("click", () => {
    navList.classList.toggle("open");
});
