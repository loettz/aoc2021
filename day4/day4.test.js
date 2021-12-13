import {getCommands, getGrids, createGrid, setMarker, getAllWinners} from './day4.js'


import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day4/testinput.txt'));

const testInput = buffer.toString()
    .split(/\n+\r/);


test('get amount of commands', () => {
    expect(getCommands(testInput[0]).length).toBe(27);
});

test('create one grid with 25 fields', () => {
    expect(createGrid(testInput[1]).length).toBe(25);
});


test('set Marker right on second field in grid', () => {
    let grid = createGrid(testInput[1]);
    expect(grid[1].marker).toBe(0);
    grid = setMarker(grid, 13);
    expect(grid[1].marker).toBe(1);
});

test('get correct score of first and last winner', () => {
    const winners = getAllWinners(getGrids(testInput.slice(1)), getCommands(testInput[0]))
    expect(winners[0].score).toBe(4512);
    expect(winners[winners.length -1].score).toBe(1924);
});
