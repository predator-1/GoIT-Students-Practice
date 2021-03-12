/**
 * Исправь ошибки и модифицируй
 */

const myself = {
  myName: 'Anna',
  myNickNames: ['Kitty', 'Dorsy'],
  printMyNickNames: function () {
    this.myNickNames.forEach(nickName => {
      console.log(this.myName + ' is also known as ' + nickName);
    });
  },
};

myself.printMyNickNames();
