let boxes = document.querySelectorAll(".box");
let ResetBtn = document.querySelector("#Reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg");
let turnO = true;  //playerx,playery
const winpatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];
const resetGame =()=>{
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    }; 
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       
        if (turnO) {
            box.innerText = "O";
            box.classList.add("o");
        } else {
            box.innerText = "X";
            box.classList.add("x");
        }
        
       box.disabled = true;
       turnO = !turnO;
       checkWinner();
    });
});
const disableBoxes=()=>{
    for(let box of boxes ){
        box.disabled=true;
    }
};
const enableBoxes = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("x", "o");
    });
};

const showwinner = (winner) => {
    if (winner === "It's a Draw!") {
        msg.innerHTML = `<strong style="color: #e74c3c;">${winner}</strong>`;
    } else {
        msg.innerHTML = `🎉 <strong>Congratulations, Winner is <span style="color: #2ecc71;">${winner}</span></strong> 🎉`;
    }
    msgContainer.classList.remove("hide");
    disableBoxes();
};
const checkWinner= () =>{
    let isDraw = true;

    for(pattern of winpatterns){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val!=""&& pos2val!=""&&pos3val!=""){
            if(pos1val==pos2val && pos2val==pos3val){
                
                showwinner(pos1val);
                return ;

            }
        }
        
    }
    boxes.forEach((box) => {
        if (box.innerText === "") {
            isDraw = false; // Still moves left
        }
});

if (isDraw) {
    showwinner("It's a Draw!");
}
};
newGameBtn.addEventListener("click",resetGame);
ResetBtn.addEventListener("click",resetGame);
