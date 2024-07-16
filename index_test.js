const assert = require('assert');
const Rooster = require('../index.js');

describe('Rooster', () => {
  describe('.announceDawn', () => {
    it('returns a rooster call', () => {
      // Setup
      const expected = 'cock-a-doodle-doo!';

      // Exercise
      const actual = Rooster.announceDawn();
      console.log('announceDawn actual:', actual); // Add logging

      // Verify
      assert.strictEqual(actual, expected);
    });
  });

  describe('.timeAtDawn', () => {
    it('returns its argument as a string', () => {
      // Setup
      const input = 12;
      const expected = '12';

      // Exercise
      const actual = Rooster.timeAtDawn(input);
      console.log('timeAtDawn actual:', actual); // Add logging

      // Verify
      assert.strictEqual(actual, expected);
    });

    it('throws a RangeError if passed a number less than 0', () => {
      // Setup
      const input = -1;

      // Exercise / Verify
      const actual = () => Rooster.timeAtDawn(input);
      console.log('timeAtDawn throws test:', input); // Add logging
      assert.throws(actual, RangeError);
    });

    it('throws a RangeError if passed a number greater than 23', () => {
      // Setup
      const input = 24;

      // Exercise / Verify
      const actual = () => Rooster.timeAtDawn(input);
      console.log('timeAtDawn throws test:', input); // Add logging
      assert.throws(actual, RangeError);
    });
  });
});
