// Arrow funcs

function sum1(a, b) {
  return a + b;
}

const sum2 = function (a, b) {
  return a + b;
};

const sum3 = (a, b) => {
  return a + b;
};

sum1 = 123;

const task = () => {
  setTimeout(() => console.log(123), 2000);
};

task();
