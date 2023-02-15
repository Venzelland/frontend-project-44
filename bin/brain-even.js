import name from '../src/cli.js';
import salut from './brain-games.js';
import readlineSync from 'readline-sync';

salut

console.log("Answer \"yes\" if the number is even, otherwise answer \"no\".");

console.log("Question: 15")

const answer = readlineSync.question('Your answer: ');

if(answer === "no") {

	console.log("Correct!")

	console.log("Question: 6")
	const answertwo = readlineSync.question('Your answer: ');

	if(answertwo === "yes") {
		console.log("Correct!")

		console.log("Question: 7")
		const answerthree = readlineSync.question('Your answer: ');

		if(answerthree === "no") {

			console.log("Correct!")
			console.log("Congratulations, " + name + "!")

		} else {

			console.log("\'" + answerthree + "\' is wrong answer ;(. Correct answer was \'no\'.\n Let's try again, " + name + "!")

		}

	} else {

		console.log("\'" + answertwo + "\' is wrong answer ;(. Correct answer was \'yes\'.\n Let's try again, " + name + "!")

	}

} else {

	console.log("\'" + answer + "\' is wrong answer ;(. Correct answer was \'no\'.\n Let's try again, " + name + "!")

}

