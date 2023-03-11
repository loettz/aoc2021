import fs from "fs";
import path from 'path';


const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day1/input.txt'));
const inputString = buffer.toString().split('\n');

// Read the input file and parse it into an array of integers
const expenseReport = inputString.map((elem) => parseInt(elem));

//Part 1: Get the number of increases in the expense report
export const getIncreases = (arr) => {
    return arr.filter((elem, i) => elem > arr[i - 1]).length
}

//Part 2: Get the sum of every three consecutive numbers in the expense report
export const getSegments = (arr) => {
    let segments = [];
    for (let i = 0; i < arr.length -2; i++) {
        segments.push(arr.slice(i, i+3).reduce((a, b) => a + b, 0));
    }
    return segments;
}

//Part 1 Result: Print the number of increases in the expense report
console.log(getIncreases(expenseReport));

//Part 2 Result: Print the number of increases in the segments of three consecutive numbers in the expense report
console.log(getIncreases(getSegments(expenseReport)));
