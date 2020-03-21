

// game app
const guessWhoApp = {

	winCharacter: null,
	questionCounter: 0,

	selectRandomCharacter: function() {
		// get person from the array and store in prop above

		const randomCharIndex = Math.floor(Math.random() * characters.length)

		// get the char from the array
		const char = characters[randomCharIndex]

		// store in above property
		this.winCharacter = char
		console.log("this is the winCharacter\n", guessWhoApp.winCharacter)

	},

	startGame: function() {

		guessWhoApp.selectRandomCharacter()

		// HIDE INTRO SCREEN -- DISPLAY: NONE
		const hideIntroScreen = document.querySelector('#intro-screen')
		hideIntroScreen.setAttribute('style', 'display: none')
		
		// SHOW MAIN SCREEN -- 
		const showMainScreen = document.querySelector('#main-screen')
		showMainScreen.setAttribute('style', 'display: flex')
	},

	compareGenderAndWinCharacter: function(gender) {
		//loop through characters array
		for(let i = 0; i < characters.length; i++) {
			// if win character is a man
			if(this.winCharacter.gender === 'female') {
				
				if(characters[i].gender === 'male'){

					//create an X element and place it on the item(div or whatever the node element is)
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')
					
				} else {
					// console.log("not a boy");
				}

			} else {
				if(characters[i].gender === 'female'){
					// console.log("this is characters name\n", characters[i].name);
					// console.log("this is characters gender\n", characters[i].gender);

					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')

				} else {
		
				}
			}	
		}
	},

	compareFacialHairAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {

			if(this.winCharacter.facialHair === true) {
				if(characters[i].facialHair === true) {

				} else {
				let thisPerson = document.querySelector(`#${characters[i].name}`)
				// console.log("this is thisPerson inside the func\n", thisPerson);
				thisPerson.classList.add('crossOff')

				}

			} else {
				if(characters[i].facialHair === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')
				}
			}
		}
	},

	compareHatAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.hat === true) {

				if(characters[i].hat === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')
				}
			} else {
				if(characters[i].hat === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	compareGlassesAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.glasses === true) {

				if(characters[i].glasses === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	

				}
			} else {
				if(characters[i].glasses === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')						
				}
			} 
		}
	},

	compareBlushingAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.blushing === true) {

				if(characters[i].blushing === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].blushing === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	compareBaldAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.bald === true) {

				if(characters[i].bald === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].bald === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}		
	},

	compareBigNoseAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.bigNose === true) {

				if(characters[i].bigNose === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].bigNose === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	compareBeardAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.beard === true) {

				if(characters[i].beard === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].beard === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	compareMustacheAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.mustache === true) {

				if(characters[i].mustache === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].mustache === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	compareEarringsAndWinCharacter: function() {
		for(let i = 0; i < characters.length; i++) {
			if(this.winCharacter.earrings === true) {

				if(characters[i].earrings === true) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			} else {

				if(characters[i].earrings === false) {

				} else {
					let thisPerson = document.querySelector(`#${characters[i].name}`)
					// console.log("this is thisPerson inside the func\n", thisPerson);
					thisPerson.classList.add('crossOff')	
				}
			}
		}
	},

	checkWinner: function() {
		// if character input name === winCharacter name 
			// win the game 
			const itemTextInput = document.querySelector('#guess-input')
			// console.log(itemTextInput.value);
			if(this.winCharacter.name === itemTextInput.value || this.winCharacter.name === event.target.parentNode.id) {
				console.log('winner');


				const showMainScreen = document.querySelector('#main-screen')
				showMainScreen.setAttribute('style', 'display: none')

				const showWinnerScreen = document.querySelector('#winner-screen')
				showWinnerScreen.setAttribute('style', 'display: flex')
		// if character input name != winCharacter name 
			// lose the game 
			} else {
				console.log('loser');

				const showMainScreen = document.querySelector('#main-screen')
				showMainScreen.setAttribute('style', 'display: none')

				const showLoseScreen = document.querySelector('#lose-screen')
				showLoseScreen.setAttribute('style', 'display: flex')
			} 


	},



	//propName = 'gender' , propVal = 'male'
	selectName: function(propName, propVal) {
		charNames = []
		
		for(let i = 0; i < characters.length; i++) {
			//console.log(characters[i][propName])
			if(characters[i][propName] === propVal) {
				charNames.push(characters[i].name)
			}
		}
		return charNames; 
	}
}

//guessWhoApp.startGame()
//guessWhoApp.selectRandomCharacter()
//guessWhoApp.compareGenderAndWinCharacter()

// Start Game
const startGameButton = document.querySelector('#start-game')
startGameButton.addEventListener('click', (event) => {
	guessWhoApp.startGame(startGameButton);
})

// Gender Question - 1
const question1 = document.querySelector('#question-1')
question1.addEventListener('click', (event) => {
	guessWhoApp.compareGenderAndWinCharacter(question1);
})

// Facial Hair Question - 2
const question2 = document.querySelector('#question-2')
question2.addEventListener('click', (event) => {
	guessWhoApp.compareFacialHairAndWinCharacter(question2);
})

// Facial Hair Question - 3
const question3 = document.querySelector('#question-3')
question3.addEventListener('click', (event) => {
	guessWhoApp.compareHatAndWinCharacter(question3);
})

// Glasses Question - 4
const question4 = document.querySelector('#question-4')
question4.addEventListener('click', (event) => {
	guessWhoApp.compareGlassesAndWinCharacter(question4);
})

// Blushing Question - 5
const question5 = document.querySelector('#question-5')
question5.addEventListener('click', (event) => {
	guessWhoApp.compareBlushingAndWinCharacter(question5);
})

// Bald Question - 6
const question6 = document.querySelector('#question-6')
question6.addEventListener('click', (event) => {
	guessWhoApp.compareBaldAndWinCharacter(question6);
})

// Big Nose Question - 7
const question7 = document.querySelector('#question-7')
question7.addEventListener('click', (event) => {
	guessWhoApp.compareBigNoseAndWinCharacter(question7);
})

// Beard Question - 8
const question8 = document.querySelector('#question-8')
question8.addEventListener('click', (event) => {
	guessWhoApp.compareBeardAndWinCharacter(question8);
})

// Mustache Question - 9
const question9 = document.querySelector('#question-9')
question9.addEventListener('click', (event) => {
	guessWhoApp.compareMustacheAndWinCharacter(question9);
})

// Earrings Question - 10
const question10 = document.querySelector('#question-10')
question10.addEventListener('click', (event) => {
	guessWhoApp.compareEarringsAndWinCharacter(question10);
})

// Submit a Guess - Final
const guessInput = document.querySelector('#form-input')
guessInput.addEventListener('submit', (event) => {
  event.preventDefault() // <--- stops the form submission

 const itemTextInput = document.querySelector('#guess-input')
 guessWhoApp.checkWinner(itemTextInput.value)  
 itemTextInput.value = ""
})


const clickContainer = document.querySelector('.mainContainer')
// listen to container
// console.log([event.target])
clickContainer.addEventListener('click', (event) => {
	console.log([event.target.parentNode.id]);
	guessWhoApp.checkWinner(clickContainer)
})
