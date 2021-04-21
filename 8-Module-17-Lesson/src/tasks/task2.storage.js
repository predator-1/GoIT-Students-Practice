const fs = require('fs');
const filename = 'reg.txt';

const options = {
  encoding: 'utf-8',
};

const saveCreds = (login, password) => {
  const all = getAllCreds();
  all.push({
    login,
    password,
  });
  const str = JSON.stringify(all);
  fs.writeFileSync(filename, str);
};

const getAllCreds = () => {
  if (fs.existsSync(filename)) {
    const fileData = fs.readFileSync(filename, options);
    if (fileData) {
      const prsed = JSON.parse(fileData);
      return prsed;
    }
  }
  return [];
};

const isCredsValid = (login, password) => {
  const all = getAllCreds();
  return all.some(el => el.login === login && el.password === password);
};

module.exports = {
  saveCreds,
  getAllCreds,
  isCredsValid,
};
