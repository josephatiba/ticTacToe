angular
	.module("ticTacToeApp")
	.factory("GameBoard", GameBoardFunc);

function GameBoardFunc() {
	

	var GameBoard = function(numSquares) {
		this.numSquares = numSquares;
		this.squares = new Array(numSquares);


		this.selectSquare = selectSquare;
		this.getSquareState = getSquareState;

		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i] = 0;
		}

		function selectSquare(num) {
			this.squares[num] = (this.squares[num] + 1) % SQUARES_STATES.length;
		}

		function getSquareState(num) {
			return SQUARES_STATES[this.squares[num]];
		}
		
	}
	
}