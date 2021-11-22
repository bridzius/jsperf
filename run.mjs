import { readdirSync } from 'fs'; 
import { version } from 'process';
import { exec } from 'child_process';
import { join } from 'path';

const TEST_DIR = 'tests';

console.log(`### NodeJS version: ${version}`);

const tests = readdirSync(TEST_DIR);

tests.forEach(test => {
  exec(`node ${join(TEST_DIR,test)}`, (_err, stdout) => {
	  console.log(stdout);
  })
});
