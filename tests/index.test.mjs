import assert from 'node:assert/strict';
import test from 'node:test';
import * as api from '../dist/esm/index.js';
test('reference prefix', () => {
  assert.deepEqual(
    Array.from({ length: 8 }, (_, i) => api.bell(i)),
    [1n, 1n, 2n, 5n, 15n, 52n, 203n, 877n],
  );
});
test('zero index', () => {
  assert.equal(api.bell(0), 1n);
});
test('recurrence or independent count', () => {
  function partitions(n) {
    let total = 0;
    function visit(i, max) {
      if (i === n) {
        total++;
        return;
      }
      for (let k = 0; k <= max + 1; k++) visit(i + 1, Math.max(max, k));
    }
    if (n === 0) return 1;
    visit(1, 0);
    return total;
  }
  for (let n = 0; n <= 7; n++) assert.equal(api.bell(n), BigInt(partitions(n)));
});
test('upper bound', () => {
  assert.equal(typeof api.bell(300), 'bigint');
});
test('invalid ranges', () => {
  assert.throws(() => api.bell(-1));
  assert.throws(() => api.bell(301));
  assert.throws(() => api.bell(1.5));
});
test('type contract', () => {
  assert.throws(() => api.bell('2'));
});
