/**
 * Array-like object arguments
 */

const argFunc = function () {
  console.log(
    Array.from(arguments).sort(function (a, b) {
      return a - b;
    }),
  );
};

argFunc(1, 3, 2, 0);
