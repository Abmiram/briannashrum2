const funEl = document.getElementById('fun');

const randomColor = () => {
    return Math.floor(Math.random() * 255);
}

funEl.addEventListener('mouseenter', () => {
    funEl.style.color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
})