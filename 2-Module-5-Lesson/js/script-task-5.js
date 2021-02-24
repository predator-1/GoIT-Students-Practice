/**
 * Bank
 */

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  counter: 1,

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    if (!(amount > 0)) {
      console.log('Invalid amount');
      return;
    }

    if (!(type === Transaction.DEPOSIT || type === Transaction.WITHDRAW)) {
      console.log('Invalid Transaction');
      return;
    }

    const id = this.counter++;

    return {
      id,
      amount,
      type,
    };
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    if (!transaction) {
      console.log('deposit transaction error');
      return;
    }
    this.balance += transaction.amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  withdraw(amount) {
    if (this.balance < amount) {
      console.log('not enought money');
      return;
    }

    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    if (!transaction) {
      console.log('withdraw transaction error');
      return;
    }
    this.balance -= transaction.amount;
    this.transactions.push(transaction);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  getTransactionDetails(id) {
    for (let transaction of this.transactions) {
      if (transaction.id === id) {
        return transaction;
      }
    }

    console.log("transaction didn't found");
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  getTransactionTotal(type) {
    const transactions = [];
    for (let transaction of this.transactions) {
      if (transaction.type === type) {
        transactions.push(transaction);
      }
    }
    return transactions;
  },
};

account.deposit(100);
account.deposit(100);
account.withdraw(50);
account.withdraw(30);
console.log(account.getBalance());
console.log(account.getTransactionTotal(Transaction.WITHDRAW));
console.log(account.getTransactionDetails(2));

account.withdraw(1030);
account.withdraw(-100);
account.deposit(-100);
