const a = {};
const b = { key: 'b' };
const c = { key: 'c' };

a[b] = '1 answer';
console.log(a);
a[c] = '2 answer';
console.log(a);
// console.log(a['[object Object]']);

console.log(a[b]);
