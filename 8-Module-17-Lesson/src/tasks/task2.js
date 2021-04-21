/** Create Registration and Authorization API
 * 1. Saving creds in file
 * 2. Add 404 error
 */

const express = require('express');
const { saveCreds, getAllCreds, isCredsValid } = require('./task2.storage');

console.log(132);
const app = express();

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.post('/register', (req, res) => {
  if (!req.body) {
    res.status(400).send();
  }
  const { login, password } = req.body;
  if (login && password) {
    saveCreds(login, password);
    res.send();
  } else {
    res.status(400).send();
  }
});

app.post('/auth', (req, res) => {
  if (!req.body) {
    res.status(400).send();
  }
  const { login, password } = req.body;
  if (login && password && isCredsValid(login, password)) {
    res.send();
  } else {
    res.status(400).send();
  }
});

app.get('/all-users', (req, res) => res.send(getAllCreds()));

app.get('*', function (req, res) {
  res.status(404).send('Not found!');
});

app.listen(3000);

module.exports = app;
