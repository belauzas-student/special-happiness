const bodyDOM = document.querySelector('body');
const headerDOM = bodyDOM.querySelector('header');

let HTML = '';

for (let i=0; i< 5; ++i) {
    HTML += `<div class="item">Item: ${i}</div>`;
}

bodyDOM.insertAdjacentElement("afterbegin", HTML);

let linksHTML = '';
for (let i=0; i<5; ++i) {
    linksHTML += `<a href="#">Link</a>`;
}

const navHTML = `<nav>${linksHTML}</nav>`;
headerDOM.innerHTML = navHTML;

console.log(HTML);