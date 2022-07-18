import { output } from '../output.mjs';
const elAmount = 100*1000;
const array = new Array(elAmount).fill('testString');

//Array from
const t0 = performance.now();
const arr_copy3 = Array.from(array);
const t1 = performance.now();
output(array.length, 'Array.from', `${t1-t0}`);
