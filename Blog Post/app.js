// THEME TOGGLE
const themeBtn = document.getElementById("theme-toggle");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    themeBtn.textContent = 
        document.body.classList.contains("light-mode") ? "☀️" : "🌙";
});

// FORM VALIDATION
const form = document.querySelector("form");
if (form) {
    form.addEventListener("submit", (e) => {
        const name = form.querySelector("input").value.trim();
        const comment = form.querySelector("textarea").value.trim();

        if (!name || !comment) {
            e.preventDefault();
            alert("Please enter both name and comment!");
        }
    });
}

// RANDOM QUOTES
const quotes = [
    "Friends don't lie.",
    "Mornings are for coffee and contemplation.",
    "The world is full of monsters."
];

const quoteBox = document.getElementById("quote");
if (quoteBox) {
    quoteBox.textContent =
        quotes[Math.floor(Math.random() * quotes.length)];
}

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
});

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});