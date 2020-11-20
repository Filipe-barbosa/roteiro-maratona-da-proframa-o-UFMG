//Coordenadas
const testCase = [
  { Coordinates: [4.5, -2.2], output: "Q4" },
  { Coordinates: [0, 0], output: "Origem" },
  { Coordinates: [0.1, 0.1], output: "Q1" },
];

const calculatesQuadrant = (coordinates) => {
  if (coordinates[0] === 0 && coordinates[1] === 0) {
    return "Origem";
  } else if (coordinates[0] > 0 && coordinates[1] > 0) {
    return "Q1";
  } else if (coordinates[0] > 0 && coordinates[1] < 0) {
    return "Q4";
  } else if (coordinates[0] < 0 && coordinates[1] > 0) {
    return "Q2";
  } else if (coordinates[0] < 0 && coordinates[1] < 0) {
    return "Q3";
  }
};
const uploadCoordinates = () => {
  let coordinates = 0;
  for (const test of testCase) {
    coordinates = calculatesQuadrant(test.Coordinates);
    console.log(
      `O valor obtido foi ${coordinates}, e o esperádo foi ${test.output}`
    );
  }
};

uploadCoordinates(testCase);
