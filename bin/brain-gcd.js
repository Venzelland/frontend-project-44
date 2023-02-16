import name from '../src/cli.js';
import salut from './brain-games.js';
import readlineSync from 'readline-sync';

salut

console.log("Find the greatest common divisor of given numbers.");

console.log("Question: 25 50")

const answer = readlineSync.question('Your answer: ');

if(answer === "25") {

	console.log("Correct!")

	console.log("Question: 100 52")
	const answertwo = readlineSync.question('Your answer: ');

	if(answertwo === "4") {
		console.log("Correct!")

		console.log("Question: 3 9")
		const answerthree = readlineSync.question('Your answer: ');

		if(answerthree === "3") {

			console.log("Correct!")
			console.log("Congratulations, " + name + "!")

		} else {

			console.log("\'" + answerthree + "\' is wrong answer ;(. Correct answer was 3.\n Let's try again, " + name + "!")

		}

	} else {

		console.log("\'" + answertwo + "\' is wrong answer ;(. Correct answer was 4.\n Let's try again, " + name + "!")

	}

} else {

	console.log("\'" + answer + "\' is wrong answer ;(. Correct answer was 25.\n Let's try again, " + name + "!")

}