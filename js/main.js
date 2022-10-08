const bodyDOM = document.querySelector('body');

let HTML = '';

for (let i=0; i< 5; ++i) {
    HTML += `<div class="item">Item: ${i}</div>`;
}

bodyDOM.insertAdjacentElement("afterbegin", HTML);

console.log(HTML);