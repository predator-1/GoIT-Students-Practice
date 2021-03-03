/**
 *  Паттерн Guard Clause (ранний возврат)
 */

const print1 = function (array) {
  if (!array) {
    console.log('null or undefined object');
    return;
  }

  if (!array.length) {
    console.log('empty array');
    return;
  }

  for (let member of array) {
    console.log(member);
  }
};

const print2 = function (array) {
  if (array) {
    if (array.length) {
      for (let member of array) {
        console.log(member);
      }
    } else {
      console.log('empty array');
    }
  } else {
    console.log('null or undefined object');
  }
};

print();
print(null);
print([]);
print([1, 2, 3]);

const num = 3;

switch (num) {
  case 1:
    break;
  default:
    break;
}
