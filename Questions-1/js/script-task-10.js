let a = [1, 2, 3];
a.map(item => item * 2);

a = [1, 2, 3];
a.map(item => item * 2);

a = [1, 2, 3];
a.map(item => item * 2);

const obj = {
  set a(value) {
    this._a = value.map(item => item * 2);
  },
  get a() {
    return this._a;
  },
};
