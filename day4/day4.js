import path from "path";
import fs from "fs";

const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day4/input.txt'));

const input = buffer.toString()
    .split(/\n+\r/);

export const getCommands = (string) => {
    return string.split(",").map((command) => parseInt(command));
}

export const getGrids = (array) => {
    return array.map((element) => createGrid(element))
}

const handleRow = (row, rowIndex) => {
    return row.replace(/[\n\r]/g, '').split(" ")
        .filter(e => e)
        .map((field, index) => ({
            field: parseInt(field),
            rowIndex: rowIndex,
            columnIndex: index,
            marker: 0
        })
    )
}

export const createGrid = (input) => {
    let rows = input.split('\n')
        .filter((row) => row.trim())
        .map((row, i) => handleRow(row, i))

    return rows.flat();
}

export const setMarker = (grid, command) => {
    const matchingIndices = grid.flatMap((element, i) => element.field === command ? i : []);
    grid.map((field, index) => (
        matchingIndices.includes(index) ? field.marker = 1 : null
    ))

    return grid;
}

export const isWinner = (grid) => {
    let matchesRow = [];
    let matchesColumn = [];
    for (let i = 0; i < 5; i++) {
        matchesRow.push(grid.filter((field) => field.rowIndex === i && field.marker === 1));
        matchesColumn.push(grid.filter((field) => field.columnIndex === i && field.marker === 1));
    }

    const winnersRow = matchesRow.filter((match) => match.length === 5);
    const winnersColumn = matchesColumn.filter((match) => match.length === 5);
    const winners = winnersRow.concat(winnersColumn)
    return winners.length !== 0;
}

export const getAllWinners = (grids, commands) => {
    let winner = false;
    let winners = [];
    let i = 0;

    do {
        grids.forEach((grid, index) => {
            grid = setMarker(grid, commands[i])
            if (isWinner(grid) && winners.findIndex(win => win.gridNumber === index) === -1) {
                let numbers = grid.filter((field) => field.marker === 0);
                let score = 0;
                numbers.forEach((field) => score += field.field);
                winners.push({gridNumber: index, score: score * commands[i]})
            }
        })

        if (winners.length >= grids.length) {
            winner = true;
        }
        i++;

    } while (!winner)

    return winners;
}





