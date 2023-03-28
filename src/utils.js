export const getRandomNumber = (minRange, maxRange) => {
	return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
  };