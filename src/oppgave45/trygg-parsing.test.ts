import {describe, expect, test} from 'vitest';
import {parseBelopEller} from './trygg-parsing';

describe('Oppgave 45 — Trygg parsing', () => {
  test('vanlig tall', () => {
    expect(parseBelopEller('1000', 0)).toBe(1000);
  });

  test('med mellomrom', () => {
    expect(parseBelopEller('  42 ', 0)).toBe(42);
  });

  test('bokstaver', () => {
    expect(parseBelopEller('abc', -1)).toBe(-1);
  });

  test('tom streng', () => {
    expect(parseBelopEller('', 99)).toBe(99);
  });

  test('delvis tall', () => {
    expect(parseBelopEller('12x', 7)).toBe(7);
  });
});
