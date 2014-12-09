angular
	.module("ticTacToeApp")
	.factory("GameBoard", GameBoardFunc);

function GameBoardFunc() {
	
SQUARES_STATES = ['unselected', 'x', 'apple'];

	var GameBoard = function(numSquares) {
		this.numSquares = numSquares;
		this.squares = new Array(numSquares);


		this.toggleSquare = toggleSquare;
		this.getSquareState = getSquareState;

		for(var i = 0; i < this.squares.length; i++) {
			this.squares[i] = 0;
		}

		function toggleSquare(num) {
			this.squares[num] = (this.squares[num] + 1) % SQUARES_STATES.length;
		}

		function getSquareState(num) {
			return SQUARES_STATES[this.squares[num]];
		}
		
	}
	return GameBoard;
}