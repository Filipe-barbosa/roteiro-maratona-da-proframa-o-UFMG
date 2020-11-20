// primos

const isprime = (value) => {
  if (value < 2 || value % 2 === 0) {
    return false;
  }
  for (let i = 3; i < Math.trunc(value / 2); i++) {
    if (value % i === 0) {
      return false;
    }
  }
  return true;
};

console.log(isprime(13))
