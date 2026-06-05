import {describe, expect, test} from 'vitest';
import {dagerTil} from './frister';

describe('Oppgave 47 — Dager til frist', () => {
  test('en uke', () => {
    expect(dagerTil(new Date(2026, 5, 3), new Date(2026, 5, 10))).toBe(7);
  });

  test('samme dag', () => {
    expect(dagerTil(new Date(2026, 5, 3), new Date(2026, 5, 3))).toBe(0);
  });

  test('passert', () => {
    expect(dagerTil(new Date(2026, 5, 10), new Date(2026, 5, 3))).toBe(-7);
  });

  test('en maned', () => {
    expect(dagerTil(new Date(2026, 5, 3), new Date(2026, 6, 3))).toBe(30);
  });

  test('over aarsskiftet', () => {
    expect(dagerTil(new Date(2026, 11, 31), new Date(2027, 0, 1))).toBe(1);
  });
});
