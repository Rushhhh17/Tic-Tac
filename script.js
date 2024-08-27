let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newGame=document.querySelector("#newGame");
let container=document.querySelector(".winner-container");
let mssg=document.querySelector("#mssg");

let Player1=true;
let winnerFound=false;
const winningPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];
let count=0;
 boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
       if(Player1){
        box.innerText="X";
        box.style.color="black";
        Player1=false;
        count++;
       }
       else{
        box.innerText="O";
        Player1=true;
        box.style.color="red";
        count++;
       }
       console.log(count);
      
       box.disabled=true; //so we cannot click on same box again
       checkWin();
       if(count===9 && winnerFound==false){
     mssg.innerText="Game Draw";  
     console.log("GAME DRAW"); 
container.classList.remove("hide");

       }
        });
 });
 const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
 }
 const ensableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
    }
 }

 const winner=(winner)=>{
mssg.innerText=`${winner} won the game`;
container.classList.remove("hide");
 }

 const checkWin=()=>{
for(let pattern of winningPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;

if(pos1!="" && pos2!="" && pos3!=""){
    if(pos1===pos2 && pos2===pos3){
     winner(pos1);
     winnerFound=true;
     disableBoxes();
     
    }  
}
}
 }
 const resetGame=()=>{
    for(let box of boxes){
        Player1=true;
        ensableBoxes();
        box.innerText="";
        container.classList.add("hide");
        count=0;
    }  
 }
 reset.addEventListener("click",resetGame);
      newGame.addEventListener("click",resetGame);