// recuperaçao

const testCase = [
  { entrada: 1, lista: [0] },
  { entrada: 7, lista: [1, 2, 3, 4, 5, 6, 7] },
  { entrada: 1, lista: [9, 5] },
];

const calculateStance = (test,instance) => {
  if (instance > test.lista.length) {
    return "não achei";
  }
  let sum = 0;
  for (let i = instance-1; i >= 0; i--) {
    sum += test.lista[i];
  }
  return sum;
};

const outputdata = (testCase) => {
  let instance = 1;
  for (test of testCase) {
    console.log(`instancia ${instance}`);
    console.log(calculateStance(test,instance));
    instance++;
  }
};

outputdata(testCase);
