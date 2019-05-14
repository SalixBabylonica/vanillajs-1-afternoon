var board=[]




console.log ('Aloha world')
function play(clickedId){
    let clickedElement=document.getElementById(clickedId)
    let playerSpan = document.getElementById('player')

    if (playerSpan.innerText === 'X') {
    playerSpan.innerText='O';
    clickedElement.innerText='X';
    board[clickedId] = 'X';
    }
    else {playerSpan.innerText='X';
    clickedElement.innerText= 'O';
    board[clickedId] = 'O';
}


var topRight=board[0]
var topCenter= board[1]
var topLeft= board[2]
var middleRight=board[3]
var middleCenter=board[4]
var middleLeft=board[5]
var bottomRight=board[6]
var bottomCenter=board[7]
var bottomLeft=board[8]


if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
    alert(`${topRight} is the winner`);
    return;
}
if (topCenter !== undefined && topCenter ===topRight && topCenter === topLeft){
    alert(`${topCenter} is the winner`);
    return;
}
if (topLeft !== undefined && topLeft === topCenter && topLeft === topRight) {
    alert(`${topLeft} is the winner`);
    return;
}
if (middleRight!== undefined && middleRight === middleCenter && middleRight === middleLeft) {
    alert(`${middleRight} is the winner`);
    return;
}
if (middleCenter !== undefined && middleCenter === topCenter && middleCenter === bottomCenter) {
    alert(`${middleCenter} is the winner`);
    return;
  }
  if (bottomRight !== undefined && bottomRight === middleCenter && bottomRight === topLeft) {
    alert(`${bottomRight} is the winner`);
    return;
  }
  if (bottomCenter !== undefined && bottomCenter === middleCenter && bottomCenter === topCenter) {
    alert(`${bottomCenter} is the winner`);
    return;
  }
  if (bottomLeft !== undefined && bottomLeft === middleCenter && bottomLeft === topRight) {
    alert(`${bottomLeft} is the winner`);
    return;
  }

  let boardFull = true;
  for (let i = 0; i <= 8; i++) {
    if (board[i] === undefined) {
      boardFull = false;
    }
  }
  if (boardFull === true) {
    alert("Cat's game, there is no winner");
  }
}
