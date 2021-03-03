/**
 * Примитивы number, bool, string, null, underfined
 * Передача по ссылке и по значению
 */

let hasAccount = ['a', 'b'];

let hasAccess = hasAccount;

hasAccount.push('c');

console.log('hasAccount');
console.log(hasAccount);
console.log('hasAccess');
console.log(hasAccess);
console.log(typeof hasAccess);
