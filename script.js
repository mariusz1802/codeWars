const alexMistakesTimeArr = [5, 10, 20, 40, 80, 160, 320, 640, 1280];

const oneKata = 60 / 10;

function alexMistakes(numberOfKata, timeLimit) {
  //TODO
  const katasTime = numberOfKata * oneKata;
  const mistakeTime = timeLimit - katasTime;
  let sum = 0;
  for (let i = 0; i <= alexMistakesTimeArr.length; i++) {
    sum += alexMistakesTimeArr[i];

    if (sum > mistakeTime) {
      return i;
    }
  }
}
alexMistakes(3, 45);
