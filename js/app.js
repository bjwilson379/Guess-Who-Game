console.log('Guess Who');

// class 
// class Character {
// 	constructor(name, gender, facialHair, mustache, beard, hat, glasses, eyeColor, blushing, hairColor, bald, bigNose, earrings) {
// 		this.name = name
// 		this.gender = gender
// 		this.facialHair = facialHair
// 		this.mustache = mustache
// 		this.beard = beard
// 		this.hat = hat
// 		this.glasses = glasses
// 		this.eyeColor = eyeColor
// 		this.blushing = blushing
// 		this.hairColor = hairColor 
// 		this.bald = bald
// 		this.bigNose = bigNose
// 		this.earrings = earrings
// 	}
// }

// game app
const guessWhoApp = {

	selectRandomCharacter: function() {
		const charactersName = characters.name
		const randCharacter = Math.floor(Math.random() * characters.length)
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

//listener on the button 
//function that takes all characters and checks each property (gender) and then returns the names
//ex pass in character array
//returning ['Alex', 'Alfred']




// listeners 
// const question1 = document.querySelectorAll('#question-1')
// question1.addEventListener('click', (event) => {
	//calling select name 
	//namesToDelete = selectName(); 
// 	guessWhoApp.eliminateCharacter(namesToDelete);

// })