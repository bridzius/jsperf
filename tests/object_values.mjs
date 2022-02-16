import { output } from '../output.mjs';

const numParams = 1000000;
const array = new Array(numParams).fill({});
const object = {};
array.forEach((_, i) => {
	object[`prop${i}`] = Math.floor(Math.random() * numParams);
});

// for in
const t0 = performance.now();
for (const prop in object) {
	if(object.hasOwnProperty()) {};
};
const t1 = performance.now();
output(array.length, 'Object for in', `${t1-t0}`);

// Object.entries
const t2 = performance.now();
Object.entries(object).forEach(_ => {});
const t3 = performance.now();
output(array.length, 'Object.entries forEach', `${t3-t2}`);


