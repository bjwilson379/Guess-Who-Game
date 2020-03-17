console.log('Guess Who');

// class 
class Character {
	constructor(name, gender, facialHair, mustache, beard, hat, glasses, eyeColor, blushing, hairColor, bald, bigNose, earrings) {
		this.name = name
		this.gender = gender
		this.facialHair = facialHair
		this.mustache = mustache
		this.beard = beard
		this.hat = hat
		this.glasses = glasses
		this.eyeColor = eyeColor
		this.blushing = blushing
		this.hairColor = hairColor 
		this.bald = bald
		this.bigNose = bigNose
		this.earrings = earrings
	}
}

// game app
const guessWhoApp = {

	characters: [
	{name: 'Alex', gender: 'male', facialHair: true, mustache: true, beard: false, hat: false, glasses: false, eyeColor: 'brown', blushing: false, hairColor: 'black', bald: false, bigNose: false, earrings: false}, 
	{name: 'Alfred', gender: 'male', facialHair: true, mustache: true, beard: false, hat: false, glasses: false, eyeColor: 'blue', blushing: false, hairColor: 'orange', bald: false, bigNose: false, earrings: false},
	{name: 'Anita', gender: 'female', facialHair: false, mustache: false, beard: false, hat: false, glasses: false, eyeColor: 'blue', blushing: true, hairColor: 'yellow', bald: false, bigNose: false, earrings: false}
	]
	
}


// listeners 