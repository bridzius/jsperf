import { output } from '../output.mjs';

const elAmount = 10*1000*1000;
const array = new Array(elAmount).fill({});

// for loop
const t0 = performance.now();
for (let i = 0; i < array.length; i++) {}
const t1 = performance.now();
output(array.length, 'for loop', `${t1-t0}`);
