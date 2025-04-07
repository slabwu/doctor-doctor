export class Organ {
    constructor(x, y, colour) {
        let element = document.createElement('div');
        container.append(element);
        this.element = element;
        this.element.style.left = x + 'px';
        this.element.style.top = y + 'px';
        this.element.style.backgroundColor = colour;
        this.element.addEventListener('mousedown', this.drag.bind(this));
        this.moveReference = this.move.bind(this);
        this.dropReference = this.drop.bind(this);
    }

    drag(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
    
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
    }
}