import {getFinalPosition} from './day2.js'


const testInput = ['forward 5', 'down 5', 'forward 8', 'up 3', 'down 8', 'forward 2'];

const commands = testInput.map((command) => command.split(' '));

test('final position should be 900', () => {
    expect(getFinalPosition(commands)).toBe(900);
});