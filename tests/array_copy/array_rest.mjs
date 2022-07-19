import { output } from '../output.mjs';
const elAmount = 100*1000;
const array = new Array(elAmount).fill('testString');

// Array rest
const t0 = performance.now();
let arr_copy2 = [];
for (let i = 0;i < array.length;i++) {
	arr_copy2 = [...arr_copy2, array[i]];
}
const t1 = performance.now();
output(array.length, 'Array rest parameters', `${t1-t0}`);
