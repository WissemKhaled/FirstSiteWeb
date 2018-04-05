/*
// Chaine de caractère / string
var myVar = "Ceci est une chaine de caractère";
var myVar = 'Ceci en est une autre';

// Number
var myVar = 12;

// Booléens / bool
var myVar = true;
var myVar = false;

// Tableau, array
var myVar = [
	"premier element",
	"deuxième élément",
	"troisème élément",
	];

//objet / object
var myVar = {}
*/
// Select the div via it's id and store the selected element inside gameConainer var.
let gameContainer = document.querySelector('#game-container');
let childDivs = document.querySelectorAll('#game-container>div');
let reInitDiv = document.querySelector('#game-controler');
let numHit = document.querySelector('#hit');
let turnCounter = 0;
//localStorage.setItem('test', 'Ceci est un test');

function save () {
	// Saving the turn counter
	localStorage.setItem('turnCounter', turnCounter);
}
function load () {
	console.log(localStorage.getItem('turnCounter'));
	document.querySelector('[data-use="turnCounter"]').innerHTML = localStorage.getItem('turnCounter');
}
function invertColor (div) {
	// Doit permettre d'inverser la couleur de la div désignée
	let green = "green-color";
	let red = "red-color";
	if (div.classList.contains(green)) {
		div.classList.remove(green);
		div.classList.add(red);
	} else {
		div.classList.remove(red);
		div.classList.add(green);
	}
}

function checkVictory (divs) {
	let victoryStatus = true;
	for (var i = 0; i < divs.length; i++) {
		// Cancel the victory at the start and don't execute this part of code after the first apply 
		if (divs[i].classList.contains('green-color')) {
		victoryStatus = false;
		break;
		}
	}
	if (victoryStatus == true) {
		//Active the message of victory after apply a delay 0,5sec
		setTimeout(function() {
			alert('GG, well play');
		}, 500);
		
	}	
}

function reInitColor (divI) {
	let green = "green-color";
	let red = "red-color";
	if (divI.classList.contains(green)) {
		divI.classList.remove(green);
		divI.classList.add(green);
	} else {
		divI.classList.remove(red);
		divI.classList.add(green);
	}
}

/*function incrHit (selector) {
	turnCounter ++;
	selector.innerHTML = turnCounter;
	reInitDiv(childDivs);
}*/
function checkdefeat() {
	if (turnCounter >= 10) {
		alert('Dommage, Tada dada dadada!')
		reInitColor();
	}
}
// When someone clicks on anything inside the gae container, it triggers
// the anonimous function
gameContainer.addEventListener('click', function(el) {
	let clickedElement = el.target;
	let childDivs = document.querySelectorAll('#game-container>div');
	for (let i = 0; i < childDivs.length; i++) {
		// check de savoir si quoi ca va s'appliquer en tous, juste pour le dev
		if (childDivs[i] == clickedElement ) {
				// if Childdivs in not equal to undefined
			if (i > 0 && i < (childDivs.length - 1 )) {
				invertColor(childDivs[i + 1]);
				// Switch the color of the box when you click on it
				invertColor(childDivs[i]);
				invertColor(childDivs[i - 1]);
			} else if (i == 0) {
					invertColor(childDivs[i + 1]);
					invertColor(childDivs[i]);
			} else if (i == (childDivs.length - 1)) {
				invertColor(childDivs[i - 1]);
				invertColor(childDivs[i]);
			}
			numHit ++
		}	
	}
	//incrHit(numHit);
	checkVictory(childDivs);
	//checkDeafeat();
	save();
})

// it's a listener for reset ce color
reInitDiv.addEventListener('click', function(elI) {
	let childDivs = document.querySelectorAll('#game-container>div');
	let childInit = document.querySelector('#game-controler>div>button');
	let clickedInit = elI.target;

	for (var i = 0; i < childDivs.length; i++) {
		if (childInit == clickedInit ) {
			reInitColor(childDivs[i]);
		}
	}
})
