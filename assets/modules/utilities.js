const getRandomNumber = (min, max) => {
  let stepOne = max - min + 1;
  let stepTwo = Math.random() * stepOne;
  let result = Math.floor(stepTwo) + min;
  return result;
};

const setAccessibility = () => {
  const extension = '.mp3';
  const agent = navigator.userAgent.toLowerCase();

  if (agent.includes('firefox') || agent.includes('opera')) {
    extension = '.ogg';
  }

  return extension;
};

export { getRandomNumber, setAccessibility };
