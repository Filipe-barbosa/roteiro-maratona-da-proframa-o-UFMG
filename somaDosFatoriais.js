//Soma dos fatoriais

const testCase = [
  [4, 4],
  [0, 0],
  [0, 2],
];

const calculatefatorial = (number) => {
  let fatorial = 1;
  for (let i = number; i > 0; i--) {
    fatorial = fatorial * i;
  }
  return fatorial;
};

const somaDosfatoriais = (testCase) => {
  let acumulateResult = [];
  for (const tests of testCase) {
    let resultCase = 0;
    for (test of tests) {
      resultCase += calculatefatorial(test);
    }
    acumulateResult.push(resultCase);
  }
  outputResult(acumulateResult);
};
const outputResult = (acumulateResult) => {
  for (result of acumulateResult) {
    console.log(result);
  }
};

somaDosfatoriais(testCase);
