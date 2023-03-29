const getRandomNumber = (minRange, maxRange) => Math.floor(
  Math.random() * (maxRange - minRange + 1) + minRange
);

export default getRandomNumber;
