// export const getRandomNumber = (minRange, maxRange) => {
// 	const randomNumber = Math.floor(Math.random() * (maxRange - minRange) + minRange);
// 	return randomNumber;
//   };
export const getRandomNumber = (minRange, maxRange) => {
	return Math.floor(Math.random() * (maxRange - minRange + 1) + minRange);
  };