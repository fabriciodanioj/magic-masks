import phone from '../lib/phone';

describe('phone tests', () => {
  test('phone likes number', () => {
    expect(phone(11111111111)).toBe('(11) 1 1111-1111');
  });

  test('phone likes string', () => {
    expect(phone('11111111111')).toBe('(11) 1 1111-1111');
  });

  test('phone over size', () => {
    expect(phone('1111111111123')).toBe('(11) 1 1111-1111');
  });
});
