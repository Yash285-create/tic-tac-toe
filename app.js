let boxes = document.querySelectorAll(".box");
let hide = document.querySelector(".hide");
let newButton = document.querySelector("#new-btn")
let resetButton = document.querySelector("#reset-btn")

let clearGame = () => {
    hide.style.display = "none";
    player = 'X'
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    })
}

newButton.addEventListener("click", clearGame);
resetButton.addEventListener("click", clearGame);

let winningCondition = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
]
let player = 'X'
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (player === 'X') {
            player = 'O';
            box.style.color = 'yellowgreen';
            box.innerText = 'X';
           

        } else {
            player = 'X'
            box.style.color = '#E05600';
            box.innerText = 'O';
        }
        box.disabled = true
        checkWinner();
    })

})

let checkWinner = () => {
    for (let winner of winningCondition) {
        //  console.log(winner[0],winner[1],winner[2]);
        let box1 = winner[0];
        let box2 = winner[1];
        let box3 = winner[2];

        if (boxes[box1].innerText !== '' && boxes[box2].innerText !== '' && boxes[box3].innerText !== '') {

            if (boxes[box1].innerText === boxes[box2].innerText && boxes[box2].innerText === boxes[box3].innerText) {
                console.log("we have a winner");
                hide.style.display = "flex";



            }
        }

    }
}


