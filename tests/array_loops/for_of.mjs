import { output } from '../output.mjs';

const elAmount = 10*1000*1000;
const array = new Array(elAmount).fill({});

// for of
const t4 = performance.now();
for (const item of array) {}
const t5 = performance.now();
output(array.length, 'for of', `${t5-t4}`);

