const obj = {
  a: 3,
  b: 1,
  sum() {
    return this.a + this.b;
  },
};

console.log(obj.sum(1, 3));
