document.addEventListener('keydown', e => {
    console.log(e.key)
})


const circle = document.getElementById('circle');
const box = document.getElementById('box');

const circleSize = 50;
const boxWidth = 400;
const boxHeight = window.innerHeight;
let circleX = 0;
let circleY = 0;

const moveCircle = (direction) => {
    const step = 10;
    switch (direction) {
        case 'ArrowUp':
            circleY -= step;
            if (circleY < 0) {
                circleY = boxHeight - circleSize;
            }
            break;
        case 'ArrowDown':
            circleY += step;
            if (circleY + circleSize > boxHeight) {
                circleY = 0;
            }
            break;
        case 'ArrowLeft':
            circleX -= step;
            if (circleX < 0) {
                circleX = boxWidth - circleSize;
            }
            break;
        case 'ArrowRight':
            circleX += step;
            if (circleX + circleSize > boxWidth) {
                circleX = 0;
            }
            break;
        case 'Enter':
            createDot();
            break;
    }
    circle.style.top = circleY + 'px';
    circle.style.left = circleX + 'px';
};

document.addEventListener('keydown', (event) => {
    moveCircle(event.key);
});


const createDot = () => {
    let dot = document.createElement('div');
    dot.className = 'dot';
    dot.style.top = circleY + 20 + 'px';
    dot.style.left = circleX + 20 + 'px';
    box.appendChild(dot);
};

