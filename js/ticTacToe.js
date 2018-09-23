function Game() {
  this.currentMove = "X";
}
Game.prototype.ticTac = function(row, col) {
  checkStatus=document.getElementById(row+"-"+col).innerHTML;
  if(checkStatus==''){
	  if(this.currentMove=='X'){
		  document.getElementById(row+"-"+col).innerHTML='<img src="img/cross.png">';
	  }else{ 
		  document.getElementById(row+"-"+col).innerHTML='<img src="img/tac.png">';
	  }
	  
  }
};
Game.prototype.changeTurn = function() {
  if (this.currentMove === 'X') {
    this.currentMove = 'O';
  } else {
    this.currentMove = 'X';
  }
};
Game.prototype.state = function(row,col) {
	 var state=document.getElementById(row+"-"+col).innerHTML;
	 if(state==='<img src="img/cross.png">')
		return 'X';
	 else  if(state==='<img src="img/tac.png">')
		return 'O';

};
Game.prototype.winner = function() {
	var winner=0;
	var square=[[], [], []];
	console.log(square);
	for(row=0;row<3;row++){
		for(col=1;col<4;col++){
			square[row][col] =this.state(row,col);
	   
		}  
   }
   
   if((square[0][1]===this.currentMove && square[0][2]===this.currentMove && square[0][3]===this.currentMove) ||
	  (square[1][1]===this.currentMove && square[1][2]===this.currentMove && square[1][3]===this.currentMove) ||
	  (square[2][1]===this.currentMove && square[2][2]===this.currentMove && square[2][3]===this.currentMove) ||
	  (square[0][1]===this.currentMove && square[1][1]===this.currentMove && square[2][1]===this.currentMove) ||
	  (square[0][2]===this.currentMove && square[1][2]===this.currentMove && square[2][2]===this.currentMove) ||
	  (square[0][3]===this.currentMove && square[1][3]===this.currentMove && square[2][3]===this.currentMove) ||
	  (square[0][1]===this.currentMove && square[1][2]===this.currentMove && square[2][3]===this.currentMove) ||
	  (square[0][3]===this.currentMove && square[1][2]===this.currentMove && square[2][1]===this.currentMove) ){
		  winner=this.currentMove; 
	  }
		
   this.changeTurn();
   console.log(winner);
   return winner;
};
Game.prototype.reset = function() {
	for(row=0;row<3;row++){
		for(col=1;col<4;col++){
			 document.getElementById(row+"-"+col).innerHTML='';
	   
		}  
   }
};
Game.prototype.disable = function(state) {
	
	for(row=0;row<3;row++){
		for(col=1;col<4;col++){
			 document.getElementById(row+"-"+col).disabled = state;
		}  
   }
};
document.addEventListener("DOMContentLoaded", function() {
	  var newGame = new Game();
	  function setMessage(message) {
		document.getElementById("message").innerHTML = message;
	  }
	  document.getElementById("newGame").addEventListener("click", function() {
		newGame.reset();
		newGame.disable(false);
	  });
	  document.getElementById("board").addEventListener("click", function(event) {
		if (event.target.classList.contains("square")) {
		  squareNO = event.target.id.split("-");
		  row = squareNO[0];
		  col = squareNO[1];
		  newGame.ticTac(row, col);
		  var winner=newGame.winner();
		  if (winner === "X") {
			setMessage("X Wins");
			newGame.disable(true);
		  } else if (winner === "O") {
			setMessage("O Wins");
			newGame.disable(true);
			 
		  } 
		}
	  });
});


