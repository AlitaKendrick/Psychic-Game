
function compLetter () {
var random = Math.floor(Math.random() * (letters.length));
var  randomChoice= letters[random];
console.log(randomChoice)
return randomChoice;
}

function guessedLetter () {
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();
	document.getElementById('yourGuess').innerHTML = userChoice 
}

function resetGuess(){
	var guesses = 9
}

//scoreboard variables and links to HTML
var wins = 0;
var losses = 0;
var guesses = 9;
var message = [];
var yourGuess = [];
document.getElementById('wins').innerHTML = wins;
document.getElementById('losses').innerHTML = losses;
document.getElementById('guesses').innerHTML = guesses;
document.getElementById('yourGuess').innerHTML = yourGuess;


//variables for computer choice
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerChoice = compLetter();



// userchoice and scoring 
document.onkeypress = function(event) {
	var userChoice = String.fromCharCode(event.keyCode).toLowerCase();


		if (userChoice == computerChoice){
			wins++;
			document.getElementById('wins').innerHTML = wins;
			document.getElementById('message').innerHTML = 'Great Job! ' + userChoice + ' is right!';

			compLetter();

		}
		else {
			guesses-1;
			document.getElementById('guesses').innerHTML = guesses;
			guessedLetter ();
			resetGuess ();

			if (guesses = 0) {
				losses++;
				document.getElementById('losses').innerHTML = losses;
				document.getElementById('message').innerHTML = "Better luck next time! A new letter has been generated";
				
				compLetter();
				resetGuess ();
			}
		}
} 
