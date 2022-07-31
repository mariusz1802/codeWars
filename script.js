const alexMistakesTime = {
  1: 5,
  2: 10,
  3: 20,
  4: 40,
  5: 80,
};

const alexMistakesTimeArr = [5, 10, 20, 40, 80];

const oneKata = 60 / 10;

function alexMistakes(numberOfKata, timeLimit) {
  //TODO
  const katasTime = numberOfKata * oneKata;
  const mistakeTime = timeLimit - katasTime;

  let sum = 0;

  //pickup one result from array and divide it by index number

  alexMistakesTimeArr.forEach((el, i) => {
    sum += alexMistakesTime[i + 1];
    if (sum > mistakeTime) {
      console.log(sum);
    }
  });
}
alexMistakes(10, 120);
/*

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(alexMistakes(10, 120), 3);
Test.assertEquals(alexMistakes(11, 120), 3);
Test.assertEquals(alexMistakes(3, 45), 2);
Test.assertEquals(alexMistakes(8, 120), 3);
Test.assertEquals(alexMistakes(6, 60), 2);
Test.assertEquals(alexMistakes(9, 180), 4);
  });
});

  
  */
