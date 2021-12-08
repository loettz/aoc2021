import fs from "fs";
import path from 'path';


const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day3/input.txt'));

const inputString = buffer.toString().split('\n');