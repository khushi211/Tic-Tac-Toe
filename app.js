var origBoard;
// var realPlayer ='0';
// var oppoPlayer= 'x';
var moveCounter = 0;
var player = 'x'
var cells = 0;
var hasWon = false; // we haven't won yet, but we want to know when we have won

var changeToSnowwhite = function (event) {
    event.target.classList.add(player);
}

var colorChange = document.querySelectorAll('.cell')
colorChange.forEach(function(cell){
    cell.addEventListener('click',changeToSnowwhite)
})



var startGame = function(){
    d.forEach(function(box){
        box.classList.remove('x');
        box.classList.remove('o');
        box.classList.remove('winner')
        box.classList.remove('result')
        box.classList.remove('drawGame')
    })
    
}
var newGames = document.querySelectorAll('.start');
newGames.forEach(function(game){
    game.addEventListener("click", startGame);
})

function turnClick() {
   moveCounter++
    if (player === 'x'){
        player = 'o'
    } else {
        player = 'x'
    }
}


var winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [0,4,8],
    [2,4,6]

]


var checkForWin = function(winCombos){
    winCombos.forEach(function(combo){
        // debugger
        if ((d[combo[0]].classList.length > 1) && (d[combo[0]].classList[1] === d[combo[1]].classList[1]) && (d[combo[1]].classList[1] === d[combo[2]].classList[1])){
           // define what happens when winner 
            console.log('winner')
            d[combo[0]].classList.add('winner')
            d[combo[1]].classList.add('winner')
            d[combo[2]].classList.add('winner')
            hasWon = true
            alert(finalResult.textContent = "GAMEOVER")
        }
    })

    if (!hasWon && moveCounter === 9) {
        console.log('draw')
        alert(finalResult.textContent = "DRAWGAME.. PLAY AGAIN")
    }
}
// var checkForDraw = function(trackTurns)  {
//     trackTurns.forEach(function(trackTurn){
//         // trackTurn.addEventListener("click",nextTurn)
//     })
// }
    
var finalResult = document.querySelector(".result")

var nextTurn = function(event) {
    turnClick();
    checkForWin(winCombos);
    // checkForDraw(winCombos);
}

var d = document.querySelectorAll(".cell");
d.forEach(function(box){
    box.addEventListener("click",nextTurn)
})
// var trackTurns = function(){

//     for  (var i = 0; i = 9; i++) {
//         return [i]

//     }
// }





    
    
    
















    //  var selecSnowwhite = 0;
    //  var selectWitch =0;
    //  function getSelection(selecSnowwhite){
    //      return Math.floor(Math.random() * Math.floor(selecSnowwhite));
    //      console.log (Snowwhite);

    //  }