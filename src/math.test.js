// math.test.js
const { add } = require('./math');

describe('add', () => {
  test('should correctly add two numbers', () => {
    const result = add(2, 3);
    expect(result).toBe(5);
  });

  test('should return a number', () => {
    const result = add(2, 3);
    expect(typeof result).toBe('number');
  });
});