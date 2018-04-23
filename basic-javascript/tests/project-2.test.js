/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-2');

// whoops.. there is no test suite for this file. You'll simply just have to create one :/

describe('Project-2 Functions', () => {
  describe('getBiggest', () => {
    it('should be a function', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest, 'function');
    });
    it('should return a number', () => {
      const getBiggest = funcs.getBiggest;
      assert.typeOf(getBiggest(10, 5), 'number');
    });
    it('should return 10', () => {
      const getBiggest = funcs.getBiggest;
      assert.equal(getBiggest(10, 5), 10);
    });
  });
  describe('greeting', () => {
    it('should be a function', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting, 'function');
    });
    it('should return a string', () => {
      const greeting = funcs.greeting;
      assert.typeOf(greeting('Spanish'), 'string');
    });
    it('should return "Hola!"', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('Spanish'), 'Hola!');
    });
    it('should return "Hola!"', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('German'), 'Guten Tag!');
    });
    it('should return "Hola!"', () => {
      const greeting = funcs.greeting;
      assert.equal(greeting('English'), 'Hello!');
    });
  });
  describe('isTenOrFive', () => {
    it('should be a function', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive, 'function');
    });
    it('should return a boolean', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.typeOf(isTenOrFive(5), 'boolean');
    });
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(10), true);
    });
    it('should return true', () => {
      const isTenOrFive = funcs.isTenOrFive;
      assert.equal(isTenOrFive(7), false);
    });
  });
  describe('isInRange', () => {
    it('should be a function', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange, 'function');
    });
    it('should return a boolean', () => {
      const isInRange = funcs.isInRange;
      assert.typeOf(isInRange(10), 'boolean');
    });
    it('should return true', () => {
      const isInRange = funcs.isInRange;
      assert.equal(isInRange(40), true);
    });
  });
  describe('isInteger', () => {
    it('should be a function', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger, 'function');
    });
    it('should return a boolean', () => {
      const isInteger = funcs.isInteger;
      assert.typeOf(isInteger(10), 'boolean');
    });
    it('should return true', () => {
      const isInteger = funcs.isInteger;
      assert.equal(isInteger(10), true);
    });
  });
  describe('fizzBuzz', () => {
    it('should be a function', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz, 'function');
    });
    it('should return a string', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.typeOf(fizzBuzz(15), 'string');
    });
    it('should return "fizzbuzz"', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(15), 'fizzbuzz');
    });
    it('should return "buzz"', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(10), 'buzz');
    });
    it('should return "fizz"', () => {
      const fizzBuzz = funcs.fizzBuzz;
      assert.equal(fizzBuzz(9), 'fizz');
    });
  });
  describe('isPrime', () => {
    it('should be a function', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime, 'function');
    });
    it('should return a boolean', () => {
      const isPrime = funcs.isPrime;
      assert.typeOf(isPrime(10), 'boolean');
    });
    it('should return true', () => {
      const isPrime = funcs.isPrime;
      assert.equal(isPrime(7), true);
    });
  });
  describe('returnFirst', () => {
    it('should be a function', () => {
      const returnFirst = funcs.returnFirst;
      assert.typeOf(returnFirst, 'function');
    });
    it('should return 1', () => {
      const returnFirst = funcs.returnFirst;
      assert.equal(returnFirst([1, 2, 3]), 1);
    });
  });
  describe('returnLast', () => {
    it('should be a function', () => {
      const returnLast = funcs.returnLast;
      assert.typeOf(returnLast, 'function');
    });
    it('should return 3', () => {
      const returnLast = funcs.returnLast;
      assert.equal(returnLast([1, 2, 3]), 3);
    });
  });
  describe('getArrayLength', () => {
    it('should be a function', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength, 'function');
    });
    it('should return a number', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.typeOf(getArrayLength([1, 2, 3]), 'number');
    });
    it('should return 10', () => {
      const getArrayLength = funcs.getArrayLength;
      assert.equal(getArrayLength([1, 2, 3]), 3);
    });
  });
  describe('incrementByOne', () => {
    it('should be a function', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne, 'function');
    });
    it('should return an array', () => {
      const incrementByOne = funcs.incrementByOne;
      assert.typeOf(incrementByOne([1, 2, 3]), 'array');
    });
    it('should return [2, 3, 4] ', () => {
      const incrementByOne = funcs.incrementByOne;
      const orig = [1, 2, 3]
      const test = [2, 3, 4];
      assert.equal(incrementByOne(orig), test);
    });
  });
});
