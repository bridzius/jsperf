export function output(items, type, speed) {
	const itemCount = items / 1000000 + ' million';
	console.log(`- [${itemCount} items] - {${type}} - ${speed}`);
}
