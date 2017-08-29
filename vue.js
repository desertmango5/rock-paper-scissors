var score1 = new Vue({
	el: '#player1-score',
	data: {
		player1score: 0,
	}
})

var score2 = new Vue({
	el: '#player2-score',
	data: {
		player2score: 0,
	}
})

var gameResult = new Vue({
	el: '#game-result',
	data: {
		result: undefined,
		gameWinner: undefined
	}
})

var player1Item = new Vue({
	el: '#player1Item',
	data: {
		rock: false,
		paper: false,
		scissors: false,
		point: false
	}
})

var player2Item = new Vue({
	el: '#player2Item',
	data: {
		rock: false,
		paper: false,
		scissors: false,
		point: false
	}
})

var playAgain = new Vue({
	el: '#play-again',
	data: {
		winner: false
	},
	methods: {
		playAgain: function() {
			score1.player1score = 0
			score2.player2score = 0
			game.winner = true
			playAgain.winner = false
			gameResult.gameWinner = undefined
		}
	}
})

var game = new Vue({
	el: '#game',
	data: {
		winner: true
	},
	methods: {
		playGame: function() {
			var random = Math.random();
			var item = Math.floor(random * 3);	// rock=0 paper=1 scissors=2
			return item
		},
		go: function() {
			var result1 = game.playGame()
			var result2 = game.playGame()

			if (result1 === 0) {
				player1Item.rock = true 
				player1Item.paper = false 
				player1Item.scissors = false 
			} else if (result1 === 1) {
					player1Item.paper = true 
					player1Item.rock = false 
					player1Item.scissors = false 
			} else if (result1 === 2) {
					player1Item.scissors = true 
					player1Item.rock = false 
					player1Item.paper = false 
			}
			if (result2 === 0) {
				player2Item.rock = true 
				player2Item.paper = false 
				player2Item.scissors = false
			} else if (result2 === 1) {
					player2Item.paper = true 
					player2Item.rock = false 
					player2Item.scissors = false 
			} else if (result2 === 2) {
					player2Item.scissors = true 
					player2Item.rock = false 
					player2Item.paper = false 
			}
			if (result1 === result2) {
				gameResult.result = 'TIE!'
				player1Item.point = false
				player2Item.point = false
			} else if (result1 === 0 && result2 === 2) {
					gameResult.result = 'Rock beats Scissors'
					player1Item.point = true
					player2Item.point = false
					score1.player1score++
			} else if (result1 === 1 && result2 === 0) {
					gameResult.result = 'Paper beats Rock'
					player1Item.point = true
					player2Item.point = false
					score1.player1score++
			} else if (result1 === 2 && result2 === 1) {
					gameResult.result = 'Scissors beat Paper'
					player1Item.point = true
					player2Item.point = false
					score1.player1score++
			} else if (result2 === 0 && result1 === 2) {
					gameResult.result = 'Rock beats Scissors'
					player2Item.point = true 
					player1Item.point = false
					score2.player2score++
			} else if (result2 === 1 && result1 === 0) {
					gameResult.result = 'Paper beats Rock'
					player2Item.point = true 
					player1Item.point = false
					score2.player2score++
			} else if (result2 === 2 && result1 === 1) {
					gameResult.result = 'Scissors beat Paper'
					player2Item.point = true 
					player1Item.point = false
					score2.player2score++
			} 
			if (score2.player2score === 3) {
				player2Item.scissors = false 
				player2Item.rock = false 
				player2Item.paper = false 
				player1Item.scissors = false 
				player1Item.rock = false 
				player1Item.paper = false 
				player2Item.point = false 
				player1Item.point = false
				gameResult.result = undefined
				game.winner = false
				playAgain.winner = true
				gameResult.gameWinner = 'Player 2 Wins!!!'
			} else if (score1.player1score === 3) {
					player2Item.scissors = false 
					player2Item.rock = false 
					player2Item.paper = false 
					player1Item.scissors = false 
					player1Item.rock = false 
					player1Item.paper = false 
					player2Item.point = false 
					player1Item.point = false
					gameResult.result = undefined
					game.winner = false
					playAgain.winner = true
					gameResult.gameWinner = 'Player 1 Wins!!!'
			}
		}
	}
})