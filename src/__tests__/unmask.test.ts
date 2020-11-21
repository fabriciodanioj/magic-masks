import unmask from '../lib/unmask';

describe('Unmask tests', () => {
  test('Unmask likes string', () => {
    expect(unmask('1.0.0 (11) 1-1')).toBe('1001111');
  });
});
