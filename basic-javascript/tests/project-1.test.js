/* eslint-disable prefer-destructuring */

const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
  describe('`multiplyByTen`', () => {
    it('should be a function', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen, 'function');
    });
    // begin here
    it('should equal 50', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.equal(multiplyByTen(5), 50);
    });
    it('should return a number', () => {
      const multiplyByTen = funcs.multiplyByTen;
      assert.typeOf(multiplyByTen(5), 'number');
    });
  });

  describe('`subtractFive`', () => {
    it('should be a function', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive, 'function');
    });
    it('should subtract 5', () => {
      const subtractFive = funcs.subtractFive;
      assert.equal(subtractFive(10), 5);
    });
    it('should return a number', () => {
      const subtractFive = funcs.subtractFive;
      assert.typeOf(subtractFive(10), 'number');
    });
  });

  describe('`areSameLength`', () => {
    it('should be a function', () => {
      const areSameLength = funcs.areSameLength;
      assert.typeOf(areSameLength, 'function');
    });
    it('should return a boolean', () => {
      const areSameLength = funcs.areSameLength;
      const arr1 = [1, 2, 3];
      const arr2 = [4, 5, 6];
      assert.typeOf(areSameLength(arr1, arr2), 'boolean');
    });
    it('should return true', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'cat';
      const str2 = 'dog';
      assert.equal(areSameLength(str1, str2), true);
    });
    it('should return false', () => {
      const areSameLength = funcs.areSameLength;
      const str1 = 'cat';
      const str3 = 'ox';
      assert.equal(areSameLength(str1, str3), false);
    });
  });

  describe('`areEqual`', () => {
    it('should be a function', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual, 'function');
    });
    it('should return a boolean', () => {
      const areEqual = funcs.areEqual;
      assert.typeOf(areEqual('x', 'y'), 'boolean');
    });
    it('should return true', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual('x', 'x'), true);
    });
    it('should return false', () => {
      const areEqual = funcs.areEqual;
      assert.equal(areEqual('x', 'y'), false);
    });
  });

  describe('`lessThanNinety`', () => {
    it('should be a function', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety, 'function');
    });
    it('should return a boolean', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.typeOf(lessThanNinety(45), 'boolean');
    });
    it('should return true', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(45), true);
    });
    it('should return false', () => {
      const lessThanNinety = funcs.lessThanNinety;
      assert.equal(lessThanNinety(100), false);
    });
  });

  describe('`greaterThanFifty`', () => {
    it('should be a function', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty, 'function');
    });
    it('should return a boolean', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.typeOf(greaterThanFifty(100), 'boolean');
    });
    it('should return true', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(100), true);
    });
    it('should return false', () => {
      const greaterThanFifty = funcs.greaterThanFifty;
      assert.equal(greaterThanFifty(25), false);
    });
  });

  describe('`add`', () => {
    it('should be a function', () => {
      const add = funcs.add;
      assert.typeOf(add, 'function');
    });
    it('should return a number', () => {
      const add = funcs.add;
      assert.typeOf(add(5, 5), 'number');
    });
    it('should return 10', () => {
      const add = funcs.add;
      assert.equal(add(5, 5), 10);
    });
  });

  describe('`subtract`', () => {
    it('should be a function', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract, 'function');
    });
    it('should return a number', () => {
      const subtract = funcs.subtract;
      assert.typeOf(subtract(10, 5), 'number');
    });
    it('should return 5', () => {
      const subtract = funcs.subtract;
      assert.equal(subtract(10, 5), 5);
    });
  });

  describe('`divide`', () => {
    it('should be a function', () => {
      const divide = funcs.divide;
      assert.typeOf(divide, 'function');
    });
    it('should return a number', () => {
      const divide = funcs.divide;
      assert.typeOf(divide(10, 5), 'number');
    });
    it('should return 2', () => {
      const divide = funcs.divide;
      assert.equal(divide(10, 5), 2);
    });
  });

  describe('`multiply`', () => {
    it('should be a function', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply, 'function');
    });
    it('should return a number', () => {
      const multiply = funcs.multiply;
      assert.typeOf(multiply(2, 10), 'number');
    });
    it('should return 20', () => {
      const multiply = funcs.multiply;
      assert.equal(multiply(2, 10), 20);
    });
  });

  describe('`getRemainder`', () => {
    it('should be a function', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder, 'function');
    });
    it('should return a number', () => {
      const getRemainder = funcs.getRemainder;
      assert.typeOf(getRemainder(6, 5), 'number');
    });
    it('should return 1', () => {
      const getRemainder = funcs.getRemainder;
      assert.equal(getRemainder(6, 5), 1);
    });
  });

  describe('`isEven`', () => {
    it('should be a function', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven, 'function');
    });
    it('should return a boolean', () => {
      const isEven = funcs.isEven;
      assert.typeOf(isEven(2), 'boolean');
    });
    it('should return true', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(2), true);
    });
    it('should return false', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(3), false);
    });
  });

  describe('`isOdd`', () => {
    it('should be a function', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd, 'function');
    });
    it('should return a boolean', () => {
      const isOdd = funcs.isOdd;
      assert.typeOf(isOdd(3), 'boolean');
    });
    it('should return true', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(3), true);
    });
    it('should return false', () => {
      const isOdd = funcs.isOdd;
      assert.equal(isOdd(2), false);
    });
  });

  describe('`square`', () => {
    it('should be a function', () => {
      const square = funcs.square;
      assert.typeOf(square, 'function');
    });
    it('should return a number', () => {
      const square = funcs.square;
      assert.typeOf(square(4), 'number');
    });
    it('should return 4', () => {
      const square = funcs.square;
      assert.equal(square(2), 4);
    });
  });

  describe('`cube`', () => {
    it('should be a function', () => {
      const cube = funcs.cube;
      assert.typeOf(cube, 'function');
    });
    it('should return a number', () => {
      const cube = funcs.cube;
      assert.typeOf(cube(2), 'number');
    });
    it('should return 8', () => {
      const cube = funcs.cube;
      assert.equal(cube(2), 8);
    });
  });

  describe('`raiseToPower`', () => {
    it('should be a function', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower, 'function');
    });
    it('should return a number', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.typeOf(raiseToPower(2, 2), 'number');
    });
    it('should return 4', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 2), 4);
    });
  });

  describe('`roundNumber`', () => {
    it('should be a function', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber, 'function');
    });
    it('should return a number', () => {
      const roundNumber = funcs.roundNumber;
      assert.typeOf(roundNumber(5.4), 'number');
    });
    it('should return 5', () => {
      const roundNumber = funcs.roundNumber;
      assert.equal(roundNumber(5.4), 5);
    });
  });

  describe('`roundUp`', () => {
    it('should be a function', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp, 'function');
    });
    it('should return a number', () => {
      const roundUp = funcs.roundUp;
      assert.typeOf(roundUp(5.5), 'number');
    });
    it('should return 6', () => {
      const roundUp = funcs.roundUp;
      assert.equal(roundUp(5.5), 6);
    });
  });

  describe('`addExclamationPoint`', () => {
    it('should be a function', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint, 'function');
    });
    it('should return a string', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.typeOf(addExclamationPoint('Hello World'), 'string');
    });
    it('should say "Hello World!"', () => {
      const addExclamationPoint = funcs.addExclamationPoint;
      assert.equal(addExclamationPoint('Hello World'), 'Hello World!');
    });
  });

  describe('`combineNames`', () => {
    it('should be a function', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames, 'function');
    });
    it('should return a string', () => {
      const combineNames = funcs.combineNames;
      assert.typeOf(combineNames('foo', 'bar'), 'string');
    });
    it('should return "foobar"', () => {
      const combineNames = funcs.combineNames;
      assert.equal(combineNames('foo', 'bar'), 'foo bar');
    });
  });

  describe('`getGreeting`', () => {
    it('should be a function', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting, 'function');
    });
    it('should return a string', () => {
      const getGreeting = funcs.getGreeting;
      assert.typeOf(getGreeting('Daniel'), 'string');
    });
    it('should return "Hello Daniel!"', () => {
      const getGreeting = funcs.getGreeting;
      assert.equal(getGreeting('Daniel'), 'Hello Daniel!');
    });
  });

  describe('`getRectangleArea`', () => {
    it('should be a function', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea, 'function');
    });
    it('should return a number', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.typeOf(getRectangleArea(2, 2), 'number');
    });
    it('should return 4', () => {
      const getRectangleArea = funcs.getRectangleArea;
      assert.equal(getRectangleArea(2, 2), 4);
    });
  });

  describe('`getTriangleArea`', () => {
    it('should be a function', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea, 'function');
    });
    it('should return a number', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.typeOf(getTriangleArea(2, 2), 'number');
    });
    it('should return 2', () => {
      const getTriangleArea = funcs.getTriangleArea;
      assert.equal(getTriangleArea(2, 2), 2);
    });
  });

  describe('`getCircleArea`', () => {
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea, 'function');
    });
    it('should return a number', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.typeOf(getCircleArea(1), 'number');
    });
    it('should be a function', () => {
      const getCircleArea = funcs.getCircleArea;
      assert.equal(getCircleArea(1), Math.PI);
    });
  });

  describe('`getRectangularPrismVolume`', () => {
    it('should be a function', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume, 'function');
    });
    it('should return a number', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.typeOf(getRectangularPrismVolume(2, 2, 2), 'number');
    });
    it('should return 8', () => {
      const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
      assert.equal(getRectangularPrismVolume(2, 2, 2), 8);
    });
  });
});
