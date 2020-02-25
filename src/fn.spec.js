import FN from './fn';

describe('FN', () => {
  it('FN should be a function', () => {
    expect(typeof FN).toEqual('function');
  });

  it('FN test api: calling equals', () => {
    const left = 'hello';
    const right = 'hello';
    const actual = FN('equals')(left, right);
    const expected = true;
    expect(actual).toEqual(expected);
  });

  it('FN test api: calling !equals', () => {
    const left = 'hello';
    const right = 'hello';
    const actual = FN('!equals')(left, right);
    const expected = false;
    expect(actual).toEqual(expected);
  });

  it('FN should accept a custom eval function', () => {
    const custom = {
      equalsSquirm: left => left === 'squirm',
    };
    let left = 'squirm';
    let actual = FN('equalsSquirm', custom)(left);
    let expected = true;
    expect(actual).toEqual(expected);

    left = 'notsquirm';
    actual = FN('equalsSquirm', custom)(left);
    expected = false;
    expect(actual).toEqual(expected);

    left = 'squirm';
    actual = FN('!equalsSquirm', custom)(left);
    expected = false;
    expect(actual).toEqual(expected);
  });

  it('should log if there is an error', () => {
    global.console = { log: jest.fn() };
    FN('nah')('left', 'right'); // function does not exist
    expect(console.log).toBeCalled(); // eslint-disable-line
  });

  it('should export aliases for equals, greaterThan, greaterThanOrEquals, lessThan, and lessThanOrEquals', () => {
    let left = 2;
    let right = 1;
    let actual = FN('>')(left, right);
    let expected = true;
    expect(actual).toEqual(expected);

    left = 2;
    right = 2;
    actual = FN('>=')(left, right);
    expected = true;
    expect(actual).toEqual(expected);

    left = 1;
    right = 2;
    actual = FN('<')(left, right);
    expected = true;
    expect(actual).toEqual(expected);

    left = 2;
    right = 2;
    actual = FN('<=')(left, right);
    expected = true;
    expect(actual).toEqual(expected);

    left = 2;
    right = 2;
    actual = FN('=')(left, right);
    expected = true;
    expect(actual).toEqual(expected);
  });
});
