console.log("Hello, world!");
let container = document.querySelector('.container');

container.style.maxWidth = ('800px');
for (let i = 0; i < 256; i++) {
    let square = document.createElement('div');
    let tint = 0;

    square.setAttribute('class', 'square');
    container.appendChild(square);
    square.style.width = ('50px');
    square.style.height = ('50px');
    square.addEventListener('mouseenter', () => {
        if (tint === 0) {
            tint += 0.1;
            square.style.opacity = `${tint}`;
            color(square);
        }
        else {
            tint += 0.1;
            square.style.opacity = `${tint}`;
        }
    });
};
erase();

const size = document.querySelector('.size');

size.addEventListener('click', grid);

function grid() {
    container.innerHTML = "";
    let input = prompt("Choose a number from 1 to 100 for dimension");
    if (input === '' || input == null) {
        input = '16'
    };
    let number = Number(input * input);
    if (isNaN(number) || Number(input)<1 || Number(input)>100) {
        alert("Please enter a valid number.");
        input = '16';
        number = '256';
    };
    for (let i = 0; i < number; i++) {
        let square = document.createElement('div');
        let tint = 0;
        square.setAttribute('class', 'square');
        square.addEventListener('mouseenter', () => {
            if (tint === 0) {
                tint += 0.1;
                square.style.opacity = `${tint}`;
                color(square);
            }
            else {
                tint += 0.1;
                square.style.opacity = `${tint}`;
            }
        });
        container.appendChild(square);
        let squareSize = 800 / Number(input);
        square.style.width = (`${squareSize}px`);
        square.style.height = (`${squareSize}px`);
    };
    erase();
}


function erase() {
    const tiles = document.querySelectorAll('.square');
    const tile = document.querySelector('.square');
    const erase = document.querySelector('.erase');
    erase.addEventListener('click', () => {
        tiles.forEach(tile => {
            tile.style.backgroundColor = 'white';
            tile.style.opacity='1';
        });
    });
}


function color(square) {
    let a = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);
    let c = Math.floor(Math.random() * 255);
    square.style.backgroundColor = `rgb(${a},${b},${c})`;
}
