let login, password;

do {
  login = prompt('Enter Login');
  password = prompt('Enter password');
  if (login && password) {
    switch (login) {
      case 'admin':
        console.log(login === password ? 'wellcome boss' : 'wrong password');
        break;
      case 'moderator':
        console.log(login === password ? 'wellcome senior' : 'wrong password');
        break;
      default:
        console.log(login === password ? 'wellcome' : 'wrong password');
    }
  }
} while (login !== null && password !== null);
