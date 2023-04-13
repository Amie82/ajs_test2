import matchers from '../app';

const input = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];
const input2 = [
  { name: 'мечник', health: 10 },
  { name: 'лучник', health: 80 },
  { name: 'маг', health: 100 },
];
const output = [
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
  { name: 'мечник', health: 10 },
];

test.each([
  ['topHealth', input, output],
  ['topHealth', input2, output],
])('testing function with %s status', (__, value, result) => {
  expect(matchers(value)).toEqual(result);
});
