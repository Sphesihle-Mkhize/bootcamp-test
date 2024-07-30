


import { mostProfitableDepartment } from '../mostProfitableDepartment.js';
import { strict as assert } from 'assert';

describe('mostProfitableDepartment', function() {
  it('should return the most profitable department', function() {
    const salesData = [
      { department: 'hardware', sales: 4500 },
      { department: 'outdoor', sales: 1500 },
      { department: 'hardware', sales: 7500 },
      { department: 'carpentry', sales: 5500 },
      { department: 'hardware', sales: 2500 },
      { department: 'carpentry', sales: 1540 },
      { department: 'outdoor', sales: 8500 },
      { department: 'carpentry', sales: 8000 },
      { department: 'hardware', sales: 15000 },
      { department: 'outdoor', sales: 25000 },
    ];
    assert.strictEqual(mostProfitableDepartment(salesData), 'outdoor');
  });
});
