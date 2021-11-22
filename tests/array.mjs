import { output } from '../output.mjs';

const elAmount = 10*1000*1000;
const array = new Array(elAmount).fill({});

// for loop
const t0 = performance.now();
for (let i = 0; i < array.length; i++) {}
const t1 = performance.now();
output(array.length, 'for loop', `${t1-t0}`);

// forEach
const t2 = performance.now();
array.forEach(() => {});
const t3 = performance.now();
output(array.length, 'forEach', `${t3-t2}`);

// for of
const t4 = performance.now();
for (const item of array) {
}
const t5 = performance.now();
output(array.length, 'for of', `${t5-t4}`);

