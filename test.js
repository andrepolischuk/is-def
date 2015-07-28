import isDef from './index';
import assert from 'assert';

describe('isDef', () => {
  it('should be defined', () => {
    assert(isDef(true));
    assert(isDef(false));
    assert(isDef(0));
    assert(isDef(100));
    assert(isDef('hello'));
    assert(isDef('NaN'));
    assert(isDef('null'));
    assert(isDef('undefined'));
    assert(isDef([]));
    assert(isDef({}));
    assert(isDef(a => a));
  });

  it('should be not defined', () => {
    assert(!isDef(null));
    assert(!isDef(NaN));
    assert(!isDef(undefined));
  });
});
