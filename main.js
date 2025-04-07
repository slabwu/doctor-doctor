import { Organ } from './organ.js';

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        new Organ(i * 120 + 20, j * 120 + 20);
    }
}