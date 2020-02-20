import { includes, includesFN } from './includes';

describe('3.x.x - includes should work in functional style', () => {
  it('should be a function', () => {
    const actual = typeof includesFN;
    const expected = 'function';

    expect(actual).toEqual(expected);
  });

  it('should perform includes functionality', () => {
    const data = {
      foo: {
        a: 'b',
      },
    };

    const RULE = includesFN('@foo', 'b');
    const actual = RULE(data);
    const expected = true;

    expect(actual).toEqual(expected);
  });
});

describe('includes', () => {
  it('includes should be a function', () => {
    expect(typeof includes).toEqual('function');
  });

  it('includes Function: Should return true when first argument is in the args array', () => {
    const args = [2, 3, 4];
    const actual = includes(args, 3);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('includes Function: Should return false when the first argument is not in args array.', () => {
    const args = [2, 3, 4];
    const actual = includes(5, args);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('includes should honor lodash.includes wishes :)', () => {
    expect(includes([1, 2, 3], 1)).toEqual(true);
    expect(includes({ a: 1, b: 2 }, 1)).toEqual(true);
    expect(includes('abcd', 'bc')).toEqual(true);
  });
});

