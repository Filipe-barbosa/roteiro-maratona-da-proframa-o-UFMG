// maior valor e sua posição

const testCase = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  52,
  53,
  96,
  85,
  41,
  52,
  96,
  84,
  32,
  68,
  74,
  42,
  52,
  14,
  96,
  3,
  852,
  12,
  3,
  63,
  52,
  45,
  789,
  456,
  32,
  74963,
  987,
  521,
  66,
  99,
  963,
  1001,
  1002,
  1003,
  88,
  77,
  44,
  11223,
  96,
  12,
  45,
  50,
  51,
  52,
  53,
  54,
  56,
  55,
  57,
  58,
  59,
  60,
  61,
  62,
  6364,
  65,
  66,
  67,
  68,
  6970,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  86,
  85,
  89,
  88,
  87,
  99,
  98,
  97,
  96,
  95,
  94,
  93,
  92,
  91,
  90,
  108,
  110,
];

const maiorNumber = (teste) => {
  let maior = [0, 0];
  for (let i = 0; i < testCase.length; i++) {
    if (testCase[i] > maior[0]) {
      maior[0] = testCase[i];
      maior[1] = i;
    }
  }
  return maior;
};

const exibeValue = () => {
  let result = maiorNumber(testCase);
  console.log(
    ` O maior valor é = ${result[0]} e está alocado na posiçã0 ${result[1]}`
  );
};

exibeValue();