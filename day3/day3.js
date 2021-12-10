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

const countOccurences = (column) => {
    return column.reduce( (acc, val) => {
        acc[val] = (acc[val] || 0 ) + 1
        return acc
    },{})
}

export const getConsumption = (input) => {
    let gammaRate = '';
    let epsilonRate = '';
    const rowLength = input[0].length


    for (let i = 0; i < rowLength; i++) {
        const counter = countOccurences(getColumn(input,i));
        const mostCommon =  Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b)
        const leastCommon =  Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? b : a)
        gammaRate += mostCommon;
        epsilonRate += leastCommon;
    }


    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

const filterInput = (input, searchMostCommon) => {
    let array = input;
    for (let i = 0; i < input[0].length; i++) {
        let col = getColumn(array, i);
        const counter = countOccurences(col);

        if (array.length > 1) {
            const mostCommon =  Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? a : b)
            const leastCommon =  Object.keys(counter).reduce((a, b) => counter[a] > counter[b] ? b : a)
            const filter = searchMostCommon ? mostCommon: leastCommon;
            array = array.filter((elem) => elem[i] === parseInt(filter));
        }
    }

    return parseInt(array.flat().join(''), 2);
}

export const calculateLifeSupportRating = (input) => {
    return filterInput(input, true) * filterInput(input, false);
}

console.log(calculateLifeSupportRating(separatedNumbers))
