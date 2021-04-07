/**
 * Set class 'red-score' to score under 10
 * Set class 'green-score' to other score
 */

const table = document.querySelector('table');

const lines = table.querySelectorAll('td');

lines.forEach(el => {
    const innerInt = parseInt(el.textContent);
    if(!isNaN(innerInt)) {
        if(innerInt < 10) {
            el.classList.add('red-score');
        } else {
            el.classList.add('green-score');
        }
    }
})