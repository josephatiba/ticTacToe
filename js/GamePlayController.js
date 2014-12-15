angular
	.module('ticTacToeApp')
	.controller('GamePlayController', GamePlayController);


GamePlayController.$inject = ['$firebase'];

function GamePlayController($firebase) {	
	
	var self = this;

	var ref = new Firebase("https://tttizzo.firebaseio.com/scoreboard");

	self.sync = $firebase(ref).$asObject();

	this.numSquares = [0,1,2,3,4,5,6,7,8];
	
	this.placeSquare = placeSquare;

	this.checkWin = checkWin;

	this.currentPlayer = 1;

	this.declareWin = null;
	
	self.sync.xWins = 0;

	self.sync.oWins = 0;

	self.sync.catsGame = 0;

	this.counter = 0;

	this.newGame = newGame;

	self.sync.$save();


	


	function placeSquare($index){
		if(this.currentPlayer == 1 ){
			this.numSquares[$index] = "X";
			this.currentPlayer = 2;

		}
		else {
			this.numSquares[$index] = "O";
			this.currentPlayer = 1;
		}
	}

	

	function checkWin(){
		console.log("clicked");
		if((this.numSquares[0] == this.numSquares[1]) && (this.numSquares[1] == this.numSquares[2])){
			console.log(this.numSquares[0] + " wins!!");
			this.declareWin = this.numSquares[0] + " wins!!";
			if(this.numSquares[1] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[3] == this.numSquares[4]) && (this.numSquares[4] == this.numSquares[5])){
			console.log(this.numSquares[3] + " wins!!");
			this.declareWin = this.numSquares[3] + " wins!!";
			if(this.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if((this.numSquares[6] == this.numSquares[7]) && (this.numSquares[7] == this.numSquares[8])){
			console.log(this.numSquares[6] + " wins!!");
			this.declareWin = this.numSquares[7] + " wins!!";
			if(this.numSquares[7] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[0] == this.numSquares[3]) && (this.numSquares[3] == this.numSquares[6])){
			console.log(this.numSquares[0] + " wins!!");
			this.declareWin = this.numSquares[0] + " wins!!";
			if(this.numSquares[3] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[1] == this.numSquares[4]) && (this.numSquares[4] == this.numSquares[7])){
			console.log(this.numSquares[1] + " wins!!");
			this.declareWin = this.numSquares[1] + " wins!!";
			if(this.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[2] == this.numSquares[5]) && (this.numSquares[5] == this.numSquares[8])){
			console.log(this.numSquares[2] + " wins!!");
			this.declareWin = this.numSquares[2] + " wins!!";
			if(this.numSquares[5] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[0] == this.numSquares[4]) && (this.numSquares[4] == this.numSquares[8])){
			console.log(this.numSquares[0] + " wins!!");
			this.declareWin = this.numSquares[0] + " wins!!";
			if(this.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};
		}
		else if ((this.numSquares[2] == this.numSquares[4]) && (this.numSquares[4] == this.numSquares[6])){
			console.log(this.numSquares[2] + " wins!!");
			this.declareWin = this.numSquares[2] + " wins!!";
			if(this.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save();
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save();
			};

		}
		this.counter = this.counter + 1;
		if(this.counter >= (this.numSquares.length) && this.declareWin == null) {
			this.declareWin = "Cat's Game!!!";
			self.sync.catsGame = self.sync.catsGame + 1;
			self.sync.$save();
		}
	}



	function newGame(){
		
		this.numSquares = [0,1,2,3,4,5,6,7,8];
		this.counter = 0;
		this.declareWin = null;

		}

	
}
