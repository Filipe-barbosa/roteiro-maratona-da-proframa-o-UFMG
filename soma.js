//Dada uma lista de N inteiros, encontre a soma de todos eles.

 const testCase=  [1,2,3,4,9]

const soma = (lista) => {
  let result = 0;
  for (let number of lista) {
    result += number;
  }
  return result;
};

console.log(soma(testCase))