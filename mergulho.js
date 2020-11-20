// Mergulho

const testCase = [
  { voluntary: [5, 3], retorno: [3, 1, 5] },
  { voluntary: [6, 6], retorno: [6, 1, 3, 2, 5, 4] },
];

const calculateVoluntary = (test) => {
  let voluntaryMap = {};
  let resultReturnVoluntary = [];
  voluntaryMap = getMap(test.retorno);
  resultReturnVoluntary = identifyVoluntaryNotReturn(
    voluntaryMap,
    test.voluntary[0]
  );
  return resultReturnVoluntary;
};

const identifyVoluntary = (test) => {
  if (test.voluntary[0] === test.voluntary[1]) {
    return "*";
  } else {
    return calculateVoluntary(test);
  }
};

const getMap = (list) => {
  const wordMap = {};
  for (const test of list) {
    wordMap[test] = test;
    //console.log(wordMap);
  }
  return wordMap;
};

const identifyVoluntaryNotReturn = (voluntaryMap, voluntary) => {
  let voluntaryNotReturn = [];
  for (let i = 1; i <= voluntary; i++) {
    if (!voluntaryMap[i]) {
      voluntaryNotReturn.push(i);
    }
  }
  return voluntaryNotReturn;
};

for (let test of testCase) {
  console.log(identifyVoluntary(test));
}
