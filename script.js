function nextHigher(n) {
  const binaryRepresentation = n.toString(2);
  const howManyBits = bitsCounter(binaryRepresentation);
  nextHigherNumber(n, howManyBits);

  do {
    const higherNumber = n++;
    const higherBinaryRepresentation = higherNumber.toString(2);
    const howManyBitsHigherNumber = bitsCounter(higherBinaryRepresentation);
  } while (howManyBits === howManyBitsHigherNumber);
}

function bitsCounter(x) {
  const character = "1";

  let regex = new RegExp(character, "g");
  let matches = x.match(regex);

  const count = matches ? matches.length : 0;
  return count;
}

function nextHigherNumber(baseNumber, bitsNumber) {
  const higherNumber = baseNumber++;
  const higherBinaryRepresentation = higherNumber.toString(2);
  const howManyBitsHigherNumber = bitsCounter(higherBinaryRepresentation);

  for (i = baseNumber; bitsNumber === howManyBitsHigherNumber; i++) {}
}

nextHigher(10);
