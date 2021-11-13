import { output } from './output.mjs';
const elAmount = 10*1000*1000;
const objects = new Array(elAmount).fill({ name: 'a', surname: 'b' });
const tuples = new Array(elAmount).fill(['a', 'b']);

// objects
const t0 = performance.now();
const obj0 = objects.map((o) => ({ a: o.name, b: o.surname }));
const t1 = performance.now();
output(objects.length, 'object enum', `${t1-t0}`);

// tuples
const t2 = performance.now();
const tup0 = tuples.map((o) => ({ a: o[0], b: o[1] }));
const t3 = performance.now();
output(tuples.length, 'tuple enum', `${t3-t2}`);
