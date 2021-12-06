const container = document.querySelector('#container');

const paragraph = document.createElement('p');
paragraph.textContent = 'Hey I\'m red!';
paragraph.style.color = 'red';
container.appendChild(paragraph);

const h3 = document.createElement('h3');
h3.textContent = `I'm a blue H3!`;
h3.style.color = 'blue';
container.appendChild(h3);

const div = document.createElement('div');
div.classList.toggle('content');
div.style.cssText = 'border: black; background: pink'

const h1 = document.createElement('h1');
h1.textContent = `I'm in a div`;
div.appendChild(h1);

const p2 = document.createElement('p');
p2.textContent = `ME TOO!`;
div.appendChild(p2);

container.appendChild(div);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    alert('Hello World');
});

btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });