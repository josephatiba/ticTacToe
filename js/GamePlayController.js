angular
	.module('ticTacToeApp')
	.controller('GamePlayController', GamePlayController);


GamePlayController.$inject = ['$firebase'];

function GamePlayController($firebase) {	
	
	var self = this;

	var ref = new Firebase("https://tttizzo.firebaseio.com");

	self.sync = $firebase(ref).$asObject();

	self.sync.numSquares = [0,1,2,3,4,5,6,7,8];
	
	this.placeSquare = placeSquare;

	this.checkWin = checkWin;

	self.sync.currentPlayer = 1;

	this.declareWin = null;
	
	

	this.counter = 0;

	this.newGame = newGame;



	self.sync.xWins = 0;

	self.sync.oWins = 0;

	self.sync.catsGame = 0;

	self.sync.$save();


	
// set puts square onto the board
	function placeSquare($index){
		// player 1
		if(self.sync.currentPlayer == 1 ){
			self.sync.numSquares[$index] = "X";
			self.sync.currentPlayer = 2;
		}
		// player 2
		else {
			self.sync.numSquares[$index] = "O";
			self.sync.currentPlayer = 1;
		}
		self.sync.$save(self.sync.numSquares);
	}

	

	function checkWin(){
		console.log("clicked");
		if((self.sync.numSquares[0] == self.sync.numSquares[1]) && (self.sync.numSquares[1] == self.sync.numSquares[2])){
			console.log(self.sync.numSquares[0] + " wins!!");
			this.declareWin = self.sync.numSquares[0] + " wins!!";
			if(self.sync.numSquares[1] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[3] == self.sync.numSquares[4]) && (self.sync.numSquares[4] == self.sync.numSquares[5])){
			console.log(self.sync.numSquares[3] + " wins!!");
			this.declareWin = self.sync.numSquares[3] + " wins!!";
			if(self.sync.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if((self.sync.numSquares[6] == self.sync.numSquares[7]) && (self.sync.numSquares[7] == self.sync.numSquares[8])){
			console.log(self.sync.numSquares[6] + " wins!!");
			this.declareWin = self.sync.numSquares[7] + " wins!!";
			if(self.sync.numSquares[7] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[0] == self.sync.numSquares[3]) && (self.sync.numSquares[3] == self.sync.numSquares[6])){
			console.log(self.sync.numSquares[0] + " wins!!");
			this.declareWin = self.sync.numSquares[0] + " wins!!";
			if(self.sync.numSquares[3] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[1] == self.sync.numSquares[4]) && (self.sync.numSquares[4] == self.sync.numSquares[7])){
			console.log(self.sync.numSquares[1] + " wins!!");
			this.declareWin = self.sync.numSquares[1] + " wins!!";
			if(self.sync.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[2] == self.sync.numSquares[5]) && (self.sync.numSquares[5] == self.sync.numSquares[8])){
			console.log(self.sync.numSquares[2] + " wins!!");
			this.declareWin = self.sync.numSquares[2] + " wins!!";
			if(self.sync.numSquares[5] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[0] == self.sync.numSquares[4]) && (self.sync.numSquares[4] == self.sync.numSquares[8])){
			console.log(self.sync.numSquares[0] + " wins!!");
			this.declareWin = self.sync.numSquares[0] + " wins!!";
			if(self.sync.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};
		}
		else if ((self.sync.numSquares[2] == self.sync.numSquares[4]) && (self.sync.numSquares[4] == self.sync.numSquares[6])){
			console.log(self.sync.numSquares[2] + " wins!!");
			this.declareWin = self.sync.numSquares[2] + " wins!!";
			if(self.sync.numSquares[4] === "X"){
				self.sync.xWins = self.sync.xWins + 1;
				self.sync.$save(self.sync.xWins);
			}
			else {
				self.sync.oWins = self.sync.oWins + 1;
				self.sync.$save(self.sync.oWins);
			};

		}
		this.counter = this.counter + 1;
		if(this.counter >= (self.sync.numSquares.length) && this.declareWin == null) {
			this.declareWin = "Cat's Game!!!";
			self.sync.catsGame = self.sync.catsGame + 1;
			self.sync.$save(self.sync.catsGame);
		}
	}



	function newGame(){
		
		self.sync.numSquares = [0,1,2,3,4,5,6,7,8];
		this.counter = 0;
		this.declareWin = null;
		self.sync.$save();

		}

	
}
