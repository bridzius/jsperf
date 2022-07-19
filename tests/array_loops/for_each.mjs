import { output } from '../output.mjs';

const elAmount = 10*1000*1000;
const array = new Array(elAmount).fill({});

// forEach
const t2 = performance.now();
array.forEach(() => {});
const t3 = performance.now();
output(array.length, 'forEach', `${t3-t2}`);

