/**
 * Контекст исполнения (this)
 * bind, call, apply
 */

const createObject1 = function (param) {
  console.log(param);
  console.log('Inside `createObject`:', this.foo);
  return {
    foo: 42,
    bar: function () {
      console.log('Inside `bar`:', this.foo);
    },
  };
};

createObject1
  .call(
    {
      foo: 10,
    },
    'this is param',
  )
  .bar.call({
    foo: 70,
  });

const createObject2 = function (param) {
  console.log(param);
  console.log('Inside `createObject`:', this.foo);
  return {
    foo: 42,
    bar: () => console.log('Inside `bar`:', this.foo),
  };
};

// createObject2
//   .apply(
//     {
//       foo: 20,
//     },
//     ['this is param'],
//   )
//   .bar.call({
//     foo: 70,
//   })();
