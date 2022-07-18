import { output } from '../output.mjs';
const elAmount = 100*1000;
const array = new Array(elAmount).fill('testString');

// Array.push
const t0 = performance.now();
const arr_copy1 = []
for (let i = 0;i < array.length;i++) {
	arr_copy1.push(array[i]);
}
const t1 = performance.now();
output(array.length, 'Array.push', `${t1-t0}`);
