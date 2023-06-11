function nextHigher(n) {
  const BitsOne = howManyBits(n);
  const BitsTwo = findNextNumber(n);
  return { bitsOne: BitsOne, bistTwo: BitsTwo };
}

function findNextNumber(n) {
  const nextNumber = ++n;
  const binaryRepresentation = nextNumber.toString(2);
  const howManyBits = bitsCounter(binaryRepresentation);
  const fun = nextHigher(n);
  console.log(fun.bitsOne);
}

function howManyBits(n) {
  const binaryRepresentation = n.toString(2);
  const howManyBits = bitsCounter(binaryRepresentation);
  return howManyBits;
}

function bitsCounter(x) {
  const character = "1";
  let regex = new RegExp(character, "g");
  let matches = x.match(regex);
  const count = matches ? matches.length : 0;
  return count;
}

nextHigher(10);
