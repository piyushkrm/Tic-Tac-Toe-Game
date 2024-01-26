let boxes = document.querySelectorAll(".box");
let piyushBox = document.querySelectorAll(".piyush-box");
let adityaBox = document.querySelectorAll(".aditya-box");
let reset = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".message-container");
let msg = document.querySelector("#msg");

let turnO = true;  //PlayerX, PlayerO
const winPattern = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [6, 4, 2],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const resetGame = () => {
    turnO = true;
    enableButton();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        // console.log("Box was clicked");
        // box.innerText = "O";
        if (turnO) {    //playerO       //it means turnO ===true 
            box.classList.add("aditya-box");
            box.innerHTML = "Piyush";
            // console.log("PlayerO was clicked");
            turnO = false;
            // box.disabled = true;
        } else {        //playerX
            box.classList.add("piyush-box")
            box.innerHTML = "Aditya";
            // console.log("PlayerX was clicked");
            turnO = true;
            // box.disabled = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

const disableButton = () => {
    for (let box of boxes) {
        box.disabled = true;
        // msgContainer.classList.add("hide");
    }
};

const enableButton = () => {
    for (let box of boxes) {
        box.disabled = false;
            box.classList.remove("aditya-box");
            box.classList.remove("piyush-box");
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulstion, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableButton();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        // console.log(pattern[0], 
        //                   pattern[1], 
        //                   pattern[2]);
        // console.log(boxes[pattern[0]].innerText, 
        //                   boxes[pattern[1]].innerText, 
        //                   boxes[pattern[2]].innerText);

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                // console.log("Winner Winner Chicken Dinner", pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);
onload = enableButton;