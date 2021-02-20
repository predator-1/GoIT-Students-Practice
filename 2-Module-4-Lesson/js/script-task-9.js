// Find palindrome

const isPalindrome = text => {
  if (!text) {
    return false;
  }

  const words = text.toLowerCase().split(' ').join().split('');
  for (let i = 0; i < words.length / 2; i += 1) {
    if (words[i] !== words[words.length - 1 - i]) {
      return false;
    }
  }
  return true;
};

console.log(isPalindrome('Sore was I ere I saw Eros')); // true
console.log(isPalindrome('Sor1e was I ere I saw Eros')); // false
console.log(isPalindrome(''));
