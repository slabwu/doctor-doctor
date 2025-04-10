let container = document.getElementById('container');
let containerBox = container.getBoundingClientRect();

export class Organ {
    constructor(x, y) {
        addElement(x, y, 'heartsil');
        this.element = addElement(x, y, 'heart', true);

        this.element.addEventListener('mousedown', this.drag.bind(this));
        this.moveReference = this.move.bind(this);
        this.dropReference = this.drop.bind(this);
    }

    drag(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.element.style.zIndex = "3";
    
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
        this.element.style.zIndex = "2";
        document.removeEventListener('mousemove', this.moveReference);
        document.removeEventListener('mouseup', this.dropReference);
    }
}

function addElement(x, y, src, front = false) {
    let element = document.createElement('img');
    element.src = `./assets/${src}.webp`;
    container.append(element);
    element.style.left = containerBox.left + x + 'px';
    element.style.top = containerBox.top + y + 'px';
    if (front) {
        element.style.zIndex = "1";
        element.classList.add('sticker');
    }
    element.addEventListener('dragstart', (e) => {
        e.preventDefault();
    });
    return element;
}