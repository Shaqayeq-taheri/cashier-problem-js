const rewire = require('rewire');

describe('cashCounter', () => {
  it('Should be defined', () => {
    const solution = rewire('../solution');
    const cashCounter = solution.__get__('cashCounter');
    expect(cashCounter).toBeDefined();
  });

  it('Returns correct message when paid is less than price', () => {
    const rewire = require('rewire');
    const solution = rewire('../solution');
    const cashCounter = solution.__get__('cashCounter');
    expect(cashCounter.calculateChange(50, 20)).toBe('Customer needs to pay €xx more');
  });

  it('Returns correct message when paid is equal to price', () => {
    const rewire = require('rewire');
    const solution = rewire('../solution');
    const cashCounter = solution.__get__('cashCounter');
    expect(cashCounter.calculateChange(50, 50)).toBe('Change: 0, Counter closed');
  });

  it('Returns correct change and update cashBox when paid is more than price', () => {
    const rewire = require('rewire');
    const solution = rewire('../solution');
    const cashCounter = solution.__get__('cashCounter');
    expect(cashCounter.calculateChange(1, 50)).toEqual({ '2': 2, '5': 1, '20': 2 });
  });

  it('Returns correct message for unacceptable denominations', () => {
    const rewire = require('rewire');
    const solution = rewire('../solution');
    const cashCounter = solution.__get__('cashCounter');
    expect(cashCounter.calculateChange(1, 3)).toBe('We accept only the amounts 1, 2, 5, 10, 20, 50');
  });
});
