import { Organ } from './organ.js';

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        new Organ(i * 110 + 10, j * 110 + 10, 'red');
    }
}