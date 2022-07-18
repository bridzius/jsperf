import { output } from '../output.mjs';
const elAmount = 10*1000*1000;
const objects = new Array(elAmount).fill({ name: 'a', surname: 'b' });
const tuples = new Array(elAmount).fill(['a', 'b']);

// tuples
const t2 = performance.now();
const tup0 = tuples.map((o) => ({ a: o[0], b: o[1] }));
const t3 = performance.now();
output(tuples.length, 'tuple enum', `${t3-t2}`);
