import name from '../src/cli.js';
import salut from './brain-games.js';
import readlineSync from 'readline-sync';

salut

console.log("What number is missing in the progression?");

console.log("Question: 5 7 9 11 13 .. 17 19 21 23")

const answer = readlineSync.question('Your answer: ');

if(answer === "15") {

	console.log("Correct!")

	console.log("Question: 2 5 8 .. 14 17 20 23 26 29")
	const answertwo = readlineSync.question('Your answer: ');

	if(answertwo === "11") {
		console.log("Correct!")

		console.log("Question: 14 19 24 29 34 39 44 49 54 ..")
		const answerthree = readlineSync.question('Your answer: ');

		if(answerthree === "59") {

			console.log("Correct!")
			console.log("Congratulations, " + name + "!")

		} else {

			console.log("\'" + answerthree + "\' is wrong answer ;(. Correct answer was 59.\n Let's try again, " + name + "!")

		}

	} else {

		console.log("\'" + answertwo + "\' is wrong answer ;(. Correct answer was 11.\n Let's try again, " + name + "!")

	}

} else {

	console.log("\'" + answer + "\' is wrong answer ;(. Correct answer was 15.\n Let's try again, " + name + "!")

}