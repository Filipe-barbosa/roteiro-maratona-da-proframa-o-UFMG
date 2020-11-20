// Overflow
testCase = [
  { memoria: 10, operator: 5 + 5 },
  { memoria: 44, operator: 23 * 2 },
  { memoria: 323500, operator: 42 * 35 },
];

const calculateOperator = (operator) => {
  if (test.memoria < test.operator) {
    return "OVERFLOW";
  } else {
    return "OK";
  }
};

for (test of testCase) {
  console.log(calculateOperator(test));
}
