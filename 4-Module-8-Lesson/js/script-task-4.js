/**
 * Исправь ошибки и модифицируй
 */

const myself = {
  myName: 'Anna',
  myNickNames: ['Kitty', 'Dorsy'],
  printMyNickNames: function () {
    'use strict';
    this.myNickNames.forEach(function (nickName) {
      console.log(this.myName + ' is also known as ' + nickName);
    });
  },
};
