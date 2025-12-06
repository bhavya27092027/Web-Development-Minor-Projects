let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");

// Get player names
let playerO = prompt("Player O, Enter your Name");
let playerX = prompt("Player X, Enter your Name");

// Track whose turn it is
let isOTurn = true;

// Winning Patterns
const winarr = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

// Handle box clicks
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (box.innerText !== "") return; // Prevent overwriting

        box.innerText = isOTurn ? "O" : "X";
        box.disabled = true;
        checkWinner();
        isOTurn = !isOTurn;
    });
});

// Check for winner
const checkWinner = () => {
    let winnerFound = false;
    for (let pattern of winarr) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val !== "" && pos1val === pos2val && pos2val === pos3val) {
            let winner = pos1val === "O" ? playerO : playerX;
            alert("Winner is " + winner + "!");
            winnerFound = true;

            // Disable all boxes after win
            boxes.forEach(box => box.disabled = true);
            return;
        }
        if (!winnerFound) {
            let allFilled = [...boxes].every(box => box.innerText !== "");
            if (allFilled) {
                alert("It's a draw!");
                resetbtn.click();
            }
        }
    }
};

// Reset button 
resetbtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = "";
        box.disabled = false;
    });
    isOTurn = true;
});
