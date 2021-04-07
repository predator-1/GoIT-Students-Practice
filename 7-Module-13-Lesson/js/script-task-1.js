/**
 * We have a list of elements on html page
 * 1. Print a text content of elements
 * 2. Add element 'Coke'
 * 2. Color text in list in red
 */

const elements = document.querySelectorAll('li');
elements.forEach(el => console.log(el.innerText));

// const li = document.createElement('li');
// li.textContent = 'Coke';
// elements[0].parentNode.append(li);

// elements[elements.length -1 ].insertAdjacentHTML('afterend', '<li>Coke</li>');

// elements[0].parentNode.innerHTML += '<li>Coke</li>';
elements[0].parentNode.insertAdjacentHTML('beforeend', '<li>Coke</li>');

document.querySelectorAll('li').forEach(li => li.style.color = 'red');
