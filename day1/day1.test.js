import {getIncreases, getSegments} from './day1.js'


const testInput = [10, 20, 12, 16, 30, 22, 25, 26];

test('increases in testInput should be 5', () => {
    expect(getIncreases(testInput)).toBe(5);
});

test('should create appropriate segments', () => {
    expect(getSegments(testInput).length).toBe(6);
    expect(getSegments(testInput)[0]).toBe(42);
});

test('increases in testInput with segments of 3 should be 4', () => {
    expect(getIncreases(getSegments(testInput))).toBe(4);
});