const array = new Array(100000000).fill({});
const itemCount = array.length / 1000000 + ' million';
let t0, t1;

// for loop
t0 = performance.now();
for (i = 0; i < array.length; i++) {}
t1 = performance.now();
console.log(`${itemCount} items - for loop - ${t1 - t0}`);

// forEach
t0 = performance.now();
array.forEach(() => {});
t1 = performance.now();
console.log(`${itemCount} items - forEach - ${t1 - t0}`);

// for of
t0 = performance.now();
for (const item of array) {
}
t1 = performance.now();
console.log(`${itemCount} items - for of - ${t1 - t0}`);
