import {describe, expect, test} from 'vitest';
import {nedtelling} from './nedtelling';

describe('Oppgave 22 — Tell ned til frist', () => {
  test('3', () => {
    expect(nedtelling(3)).toBe('3, 2, 1, frist!');
  });

  test('1', () => {
    expect(nedtelling(1)).toBe('1, frist!');
  });

  test('0', () => {
    expect(nedtelling(0)).toBe('frist!');
  });

  test('5', () => {
    expect(nedtelling(5)).toBe('5, 4, 3, 2, 1, frist!');
  });
});
