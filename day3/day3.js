import fs from "fs";
import path from 'path';


const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day3/input.txt'));

const inputString = buffer.toString().split('\n');

const separatedNumbers = inputString.map((elem) => elem.trim().split("").map((elem) => parseInt(elem)));

export const getColumn = (arr, index) => {
    let columnValues = []
    arr.forEach((elem) => {
        columnValues.push(elem[index])
    })

    return columnValues;
}

export const getZeroesinColumn = (column) => {
    return column.filter((elem) => elem === 0)
}

export const getMostCommonBit = (column) => {
    return getZeroesinColumn(column).length >= column.length / 2 ? 0: 1;
}

export const getLeastCommonBit = (column) => {
    return getZeroesinColumn(column).length >= column.length / 2 ? 1: 0;
}


export const getConsumption = (input) => {
    let gammaRate = '';
    let epsilonRate = '';
    const rowLength = input[0].length
    for (let i = 0; i < rowLength; i++) {
        gammaRate += getMostCommonBit(getColumn(input, i)).toString();
        epsilonRate += getLeastCommonBit(getColumn(input, i)).toString();
    }

    return gammaRate * epsilonRate;
}

console.log(getConsumption(separatedNumbers));
