let container = document.getElementById('container');
let containerBox = container.getBoundingClientRect();
const ERROR = 30;
let layer = 2;

export class Organ {
    constructor(asset, x, y) {
        addElement(x, y, asset + 'sil');
        this.element = addElement(x, y, asset, true);

        this.element.addEventListener('mousedown', this.drag.bind(this));
        this.moveReference = this.move.bind(this);
        this.dropReference = this.drop.bind(this);

        let originalPosition = this.element.getBoundingClientRect();
        this.originalX = originalPosition.x;
        this.originalY = originalPosition.y;

        this.setPosition()

        console.log(this.x, this.y);
    }

    drag(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.element.style.zIndex = layer;
        layer++;
    
        document.addEventListener('mousemove', this.moveReference);
        document.addEventListener('mouseup', this.dropReference)
    }
    
    move(e) {
        const newX = this.startX - e.clientX;
        const newY = this.startY - e.clientY;
    
        this.startX = e.clientX;
        this.startY = e.clientY;
    
        this.element.style.top = (this.element.offsetTop - newY) + 'px';
        this.element.style.left = (this.element.offsetLeft - newX) + 'px';
    }
    
    drop(e) {
        document.removeEventListener('mousemove', this.moveReference);
        document.removeEventListener('mouseup', this.dropReference);

        this.setPosition()

        if (this.x < this.originalX + ERROR && this.x > this.originalX - ERROR &&
            this.y < this.originalY + ERROR && this.y > this.originalY - ERROR) {
            this.element.style.top = this.originalY + 'px';
            this.element.style.left = this.originalX + 'px';
        }
    }

    setPosition() {
        let organBox = this.element.getBoundingClientRect();
        this.x = organBox.x;
        this.y = organBox.y;
    }
}

function addElement(x, y, src, front = false) {
    let element = document.createElement('img');
    element.src = `./assets/${src}.webp`;
    container.append(element);
    element.style.left = containerBox.left + x + 'px';
    element.style.top = containerBox.top + y + 'px';
    if (front) {
        element.style.zIndex = 1;
        element.classList.add('sticker');
    }
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
    return element;
}