import { Organ } from './organ.js';

const UNIT = 120;

let organs = [
    ['heart', 0, 0],
    ['brain', UNIT, 0],
    ['intestines', 0, UNIT],
    ['liver', 2 * UNIT + 10, 0],
    ['lung', 2 * UNIT, UNIT],
    ['stomach', 3 * UNIT, 0],
]

for (let organ of organs) {
    new Organ(organ[0], 20 + organ[1], 20 + organ[2]);
}