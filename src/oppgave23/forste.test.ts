import {describe, expect, test} from 'vitest';
import {forsteOver} from './forste';

describe('Oppgave 23 — Første over grense', () => {
  test('andre element', () => {
    expect(forsteOver([10, 20, 30], 15)).toBe(1);
  });

  test('tredje element', () => {
    expect(forsteOver([10, 20, 30], 25)).toBe(2);
  });

  test('ingen over', () => {
    expect(forsteOver([10, 20, 30], 100)).toBe(-1);
  });

  test('tom liste', () => {
    expect(forsteOver([], 5)).toBe(-1);
  });

  test('forste element', () => {
    expect(forsteOver([50, 5, 5], 40)).toBe(0);
  });
});
