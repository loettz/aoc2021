import {calculateLifeSupportRating, getConsumption} from './day3.js'

const testInput = ['00100', '11110', '10110'];

const separatedNumbers = testInput.map((elem) => elem.trim().split("").map((elem) => parseInt(elem)));


test('calculate consumption correctly', () => {
    expect(getConsumption(separatedNumbers)).toBe(264);
});

test('calculate consumption correctly', () => {
    expect(calculateLifeSupportRating(separatedNumbers)).toBe(120);
});