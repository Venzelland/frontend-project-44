import name from '../src/cli.js';
import salut from './brain-games.js';
import readlineSync from 'readline-sync';

salut

console.log("What is the result of the expression?");

console.log("Question: 5 + 10")

const answer = readlineSync.question('Your answer: ');

if(answer === "15") {

	console.log("Correct!")

	console.log("Question: 25 - 11")
	const answertwo = readlineSync.question('Your answer: ');

	if(answertwo === "14") {
		console.log("Correct!")

		console.log("Question: 25 * 7")
		const answerthree = readlineSync.question('Your answer: ');

		if(answerthree === "175") {

			console.log("Correct!")
			console.log("Congratulations, " + name + "!")

		} else {

			console.log("\'" + answerthree + "\' is wrong answer ;(. Correct answer was 175.\n Let's try again, " + name + "!")

		}

	} else {

		console.log("\'" + answertwo + "\' is wrong answer ;(. Correct answer was 14.\n Let's try again, " + name + "!")

	}

} else {

	console.log("\'" + answer + "\' is wrong answer ;(. Correct answer was 15.\n Let's try again, " + name + "!")

}