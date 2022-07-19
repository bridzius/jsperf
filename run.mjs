import { readdirSync } from 'fs'; 
import { version, stdout } from 'process';
import { exec } from 'child_process';
import { join } from 'path';

const TEST_DIR = 'tests';

stdout.write(`| NodeJS version: ${version} ||||\n| ----- | ----- | ----- | ----- |\n`);

const testdirs = readdirSync(TEST_DIR, { withFileTypes: true }).filter(dir => dir.isDirectory()).map(dir => dir.name);
const tests = testdirs.reduce((acc, dir) => [...acc, ...readdirSync(join(TEST_DIR, dir)).map(test => join(dir, test))], []);

tests.forEach(test => {
  const testFile = join(TEST_DIR, test);
  exec(`node ${testFile}`, (_err, output) => {
    stdout.write(`| **${testFile}** `);
	  stdout.write(output);
  })
});
