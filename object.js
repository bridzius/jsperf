const objects = new Array(10000000).fill({ name: 'a', surname: 'b' });
const tuples = new Array(10000000).fill(['a', 'b']);

const t0 = performance.now();
const obj0 = objects.map((o) => ({ a: o.name, b: o.surname }));
const t1 = performance.now();
console.log(`Speed of obj enumeration - ${t1 - t0}`);

const t2 = performance.now();
const tup0 = tuples.map((o) => ({ a: o[0], b: o[1] }));
const t3 = performance.now();
console.log(`Speed of tuple enumeration - ${t3 - t2}`);
