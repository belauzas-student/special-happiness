const bodyDOM = document.querySelector('body');
const headerDOM = bodyDOM.querySelector('header');

let HTML = '';

for (let i=0; i< 5; ++i) {
    HTML += `<div class="item">Item: ${i}</div>`;
}

bodyDOM.insertAdjacentElement("afterbegin", HTML);

function renderNav(count = 0, color = 'red', q, w, e,r) {
    let HTML = '';
    for (let i=0; i<count; ++i) {
        HTML += `<a href="#">Link</a>`;
    }
    return `<nav>${HTML}</nav>`;
}

headerDOM.innerHTML = renderNav(5);

console.log(HTML);

const PI = 3.14;