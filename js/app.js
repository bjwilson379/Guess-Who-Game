console.log('Guess Who');


// game app
const guessWhoApp = {

	winCharacter: null,

	selectRandomCharacter: function() {
		// get person from the array and store in prop above

		const randomCharIndex = Math.floor(Math.random() * characters.length)

		// get the char from the array
		const char = characters[randomCharIndex]

		// store in above property
		this.winCharacter = char

	},

	compareQuestionAndWinCharacter: function(gender) {
		//loop through characters array
		for(let i = 0; i < characters.length; i++) {
			// if win character is a man
			if(this.winCharacter.gender === 'male') {
				// change DOM: put an X over women
				
					// gender.css('opacity', 0)
				console.log(i, 'put an X over women');	
			// else if win character is a woman
			} else {
				// put an x over men
				console.log(i, 'put an x over men');
			}	
		}
	},

	// eliminateCharacter: function(nameArr) {
	// 	// based on the question type it should eliminate the character 
	// 	// Question 1 "Is the character a man"
	//select off name then delete element
	// 	// if()
	// }

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

guessWhoApp.selectRandomCharacter()
guessWhoApp.compareQuestionAndWinCharacter()




//listener on the button 
//function that takes all characters and checks each property (gender) and then returns the names
//ex pass in character array
//returning ['Alex', 'Alfred']

const question1 = document.querySelector('#question-1')
question1.addEventListener('click', (event) => {
	// calling select name 
	// namesToDelete = selectName(); 
	guessWhoApp.compareQuestionAndWinCharacter(question1);
})


// listeners 
// const question1 = document.querySelectorAll('#question-1')
// question1.addEventListener('click', (event) => {
	//calling select name 
	//namesToDelete = selectName(); 
// 	guessWhoApp.eliminateCharacter(namesToDelete);

// })