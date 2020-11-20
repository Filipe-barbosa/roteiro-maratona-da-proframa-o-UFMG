//bafo

const testcase = [
  [
    [1, 5],
    [2, 3],
  ],
  [
    [0, 0],
    [4, 7],
    [10, 0],
  ],
];

const playWineeer = (testcase) => {
  let i = 1
  for (const test of testcase) {
    let aldo = 0;
    let beto = 0;
    console.log(`teste ${i}`);
    for (const mathes of test) {
      aldo += mathes[0];
      beto += mathes[1];
    }
    if (aldo > beto) {
      console.log("Aldo");
      console.log("");
    } else {
      console.log("Beto");
      console.log("");
    }
    i++
  }
};

playWineeer(testcase);
