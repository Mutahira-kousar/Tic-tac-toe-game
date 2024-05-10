let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn= document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turn0 = true;   //player0 , playerX

 const winPatterns =[
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
 ]


 boxes.forEach((box) => {
    box.addEventListener("click" , () => {
       
        if(turn0){     //player0
            box.innerText = "O";
            turn0 = false;
        }else{      // playerX
            box.innerText = "X";
            turn0 = true;
        }
        box.disabled = true;

        checkWinner();
    });
    
 });


//  to reset game function

 const resetGame = () =>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 };

//  disable boxes after winning
 const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
 }

//  enable boxes after game end for new game
 const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
 }

//  show winner

 const showWinner = (Winner) => {
    msg.innerText = `Congratulation, Winner is ${Winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();

 }

//   check who is the winner

 const checkWinner = () => {
    for (let pattern of winPatterns){
       
           let Pos1Val  = boxes[pattern[0]].innerText;
           let Pos2Val = boxes[pattern[1]].innerText;
           let Pos3Val = boxes[pattern[2]].innerText;

           if(Pos1Val != ""  && Pos2Val != "" && Pos3Val != ""){
            if (Pos1Val === Pos2Val && Pos2Val === Pos3Val){
                

                showWinner(Pos1Val);
            }
           }
        
    }
 };

 newGameBtn.addEventListener("click" , resetGame);
 resetBtn.addEventListener("click" , resetGame);
 

