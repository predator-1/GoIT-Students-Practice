const array = [
  {
    name: 'Jake',
  },
  {
    name: 'Joe',
  },
  {
    name: 'Jimm',
  },
];

const changeName = function (array, currentName, newName) {
  for (let i = 0; i < array.length; i += 1) {
    const nameObj = array[i];
    if (nameObj.name && currentName === nameObj.name) {
      console.log(nameObj.name);
      nameObj.name = newName;
      break;
    }
  }
};

changeName(array, 'Joe', 'Pavlo');

console.log(array);
