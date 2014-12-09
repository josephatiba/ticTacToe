angular
	.module('ticTacToeApp')
	.controller('PlayersController', PlayersControllerFunc);

PlayersControllerFunc.$inject = ['GameBoard'];


function PlayersControllerFunc(GameBoard) {
	this.gameName = "TicTacToe";	

	this.activeBoard = new GameBoard(9);
}