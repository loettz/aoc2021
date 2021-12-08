import fs from "fs";
import path from 'path';


const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day1/input.txt'));
const inputString = buffer.toString().split('\n');
const expenseReport = inputString.map((elem) => parseInt(elem));


const getIncreases = (arr) => {
    return arr.filter((elem, i) => elem > arr[i - 1]).length
}


let segments = [];

for (let i = 0; i < expenseReport.length -2; i++) {
    segments.push(expenseReport.slice(i, i+3).reduce((a, b) => a + b, 0));
}


//Part 1
console.log(getIncreases(expenseReport));

//Part 2
console.log(getIncreases(segments));
