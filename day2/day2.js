import fs from "fs";
import path from 'path';


const __dirname = path.resolve();
const buffer = fs.readFileSync(path.join(__dirname, '/day2/input.txt'));

const inputString = buffer.toString().split('\n');

const commands = inputString.map((command) => command.split(' '));

//Part 1

const forwardSum =  commands
    .filter((elem) => elem[0] === 'forward')
    .map((elem) => parseInt(elem[1]))
    .reduce((a, b) => a + b)

const downSum =  commands
    .filter((elem) => elem[0] === 'down')
    .map((elem) => parseInt(elem[1]))
    .reduce((a, b) => a + b)

const upSum =  commands
    .filter((elem) => elem[0] === 'up')
    .map((elem) => parseInt(elem[1]))
    .reduce((a, b) => a + b)

const depthPart1 = downSum - upSum;

// prints result of part 1
console.log(forwardSum * depthPart1)



//Part 2

export const getFinalPosition = (arr) => {
    let horizontal = 0;
    let depth = 0;
    let aim = 0;

    arr.forEach((elem, index) => {
        switch (elem[0]) {
            case 'down':
                aim += parseInt(elem[1]);
                break;
            case 'up':
                aim -= parseInt(elem[1]);
                break;
            case 'forward':
                horizontal += parseInt(elem[1]);
                depth += (aim * elem[1])
        }
    } )

    return horizontal * depth;
}

//prints result of part 2
console.log(getFinalPosition(commands));
