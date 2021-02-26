// Destruction objects

const account = {
  balance: 100,
  credit: 50,
  bonus: 75,
};

const getFullBalance = currentAccount => {
  //let { balance, credit, bonus } = currentAccount;
  currentAccount.balance += 3;
  let balance = currentAccount.balance;
  let credit = currentAccount.credit;
  let bonus = currentAccount.bonus;

  balance = balance * 2;
  return balance + credit + bonus;
};

console.log(getFullBalance(account));
console.log(account);

// Destruction array

const salaries = [90, 100, 110]; // low mid hight

// const low = salaries[0];
// const mid = salaries[1];
// const hight = salaries[2];

const [low, mid, hight] = salaries;

console.log(low, mid, hight);
