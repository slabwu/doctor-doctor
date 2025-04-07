let newX, newY, startX, startY;
let card = document.getElementById('card');

const drag = (e) => {
    startX = e.clientX;
    startY = e.clientY;

    document.addEventListener('mousemove', moveElement);
    document.addEventListener('mouseup', dropElement)
}

const moveElement = (e) => {
    newX = startX - e.clientX;
    newY = startY - e.clientY;

    startX = e.clientX;
    startY = e.clientY;

    card.style.top = (card.offsetTop - newY) + 'px';
    card.style.left = (card.offsetLeft - newX) + 'px';
}

const dropElement = (e) => {
    document.removeEventListener('mousemove', moveElement);
}

card.addEventListener('mousedown', drag);