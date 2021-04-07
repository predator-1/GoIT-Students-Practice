/**
 * We have list of numbers
 * 1. Remove all even numbers
 * 2. Replase text to image https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50
 */

const elements = document.querySelectorAll('li');

elements.forEach(el => {
    if(parseInt(el.textContent) % 2 === 0) {
        // el.remove();
        el.parentNode.removeChild(el);
    }
})

const updatedElements = document.querySelectorAll('li');
updatedElements.forEach(el => {
    const image = document.createElement('img');
    image.setAttribute('src', 'https://i.picsum.photos/id/65/200/200.jpg?hmac=pZrTO_F80X2VYUVpgorpj6xM_WABGhjIXYieK__8B50');
    el.textContent = '';
    el.appendChild(image);
})