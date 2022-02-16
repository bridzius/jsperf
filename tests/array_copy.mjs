import { output } from '../output.mjs';
const elAmount = 100*1000;
const array = new Array(elAmount).fill('testString');
let t0, t1;

// Array.push
t0 = performance.now();
const arr_copy1 = []
for (let i = 0;i < array.length;i++) {
	arr_copy1.push(array[i]);
}
t1 = performance.now();
output(array.length, 'Array.push', `${t1-t0}`);

// Array rest
t0 = performance.now();
let arr_copy2 = [];
for (let i = 0;i < array.length;i++) {
	arr_copy2 = [...arr_copy2, array[i]];
}
t1 = performance.now();
output(array.length, 'Array rest parameters', `${t1-t0}`);

//Array from
t0 = performance.now();
const arr_copy3 = Array.from(array);
t1 = performance.now();
output(array.length, 'Array.from', `${t1-t0}`);
