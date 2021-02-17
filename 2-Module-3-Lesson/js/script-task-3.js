/**
 * Array basic functions
 * 1. Add 'Rock' to the end
 * 2. Replace middle value to 'Classic'. It have to work with any length
 * 3. Remove first element and type in console
 * 4. Add 'Rap' and 'Raggy' to the start
 */

const styles = ['Jazz', 'Blues'];

styles.push('Rock');
styles.splice(styles.length / 2, 1, 'Classic');
console.log(styles.shift());

styles.unshift('Rap', 'Raggy');
styles.forEach(function (d) {
  console.log(d);
});
console.log(styles);
