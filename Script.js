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
let gameContainer = document.querySelector('#game-container')
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
		if (divs[i].classList.contains('green-color')) {
		victoryStatus = false;
		break;
		}
	}
	if (victoryStatus == true) {
		
		alert('Vous avez gagné');
	}	
}


// When someone clicks on anything inside the gae container, it triggers
// the annomous function
gameContainer.addEventListener('click', function(el) {

	let childDivs = document.querySelectorAll('#game-container>div');
	// We get the target of the click event, which is the specific dev and not the container div	
	let clickedElement = el.target;
	for (let i = 0; i < childDivs.length; i++) {
		// check de savoir si quoi ca va s'appliquer en tous, juste pour le dev
		if (childDivs[i] == clickedElement) {
				// if Childdivs in not equal to undefined
			if (i > 0 && i < (childDivs.length - 1)) {
				invertColor(childDivs[i + 1]);
				invertColor(childDivs[i - 1]);
			} else if (i == 0) {
					invertColor(childDivs[i + 1]);
			} else if (i == (childDivs.length - 1)) {
				invertColor(childDivs[i - 1]);
			}
		}
	}
	checkVictory(childDivs);
})



