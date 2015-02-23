import assert from 'assert';
import map from './';

let double = x => x * 2;

it('fj-map', () => {
  assert.deepEqual(map(double, [1,2,3]),[2,4,6]);
  let doubler = map(double);
  assert.deepEqual(doubler([1,2,3]),[2,4,6]);
});
