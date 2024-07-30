import { findItemsOver } from '../findItemsOver.js';
import { strict as assert } from 'assert';

describe('findItemsOver', function() {
  it('should return items with quantity over the specified threshold', function() {
    const items = [
      { name: 'item1', qty: 25 },
      { name: 'item2', qty: 10 },
      { name: 'item3', qty: 30 }
    ];
    const threshold = 20;
    const expected = [
      { name: 'item1', qty: 25 },
      { name: 'item3', qty: 30 }
    ];
    assert.deepStrictEqual(findItemsOver(items, threshold), expected);
  });

  it('should return an empty array if no items exceed the threshold', function() {
    const items = [
      { name: 'item1', qty: 15 },
      { name: 'item2', qty: 10 }
    ];
    const threshold = 20;
    const expected = [];
    assert.deepStrictEqual(findItemsOver(items, threshold), expected);
  });

  it('should return all items if the threshold is very low', function() {
    const items = [
      { name: 'item1', qty: 25 },
      { name: 'item2', qty: 10 }
    ];
    const threshold = 5;
    const expected = [
      { name: 'item1', qty: 25 },
      { name: 'item2', qty: 10 }
    ];
    assert.deepStrictEqual(findItemsOver(items, threshold), expected);
  });
});
