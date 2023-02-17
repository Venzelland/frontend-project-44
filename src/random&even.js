export const getRandomNumber = (minRange, maxRange) => {
	const randomNumber = Math.floor(math.random() * (maxRange - minRange) + minRange);
	return randomNumber;
};