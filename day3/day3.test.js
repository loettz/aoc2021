import {getZeroesinColumn, getColumn, getConsumption} from './day3.js'

const testInput = ['00100', '11110', '10110'];

const separatedNumbers = testInput.map((elem) => elem.trim().split("").map((elem) => parseInt(elem)));


test('second column should contain 2 zeros', () => {
    expect(getZeroesinColumn(getColumn(separatedNumbers, 1)).length).toBe(2);
});

test('calculate consumption correctly', () => {
    expect(getConsumption(separatedNumbers)).toBe(10120110);
});