import {describe, expect, test} from 'vitest';
import {alderIAr} from './alder';

describe('Oppgave 3 — Beregn alder', () => {
  test('født 1990', () => {
    expect(alderIAr(1990, 2026)).toBe(36);
  });

  test('født 2000', () => {
    expect(alderIAr(2000, 2026)).toBe(26);
  });

  test('samme år gir null', () => {
    expect(alderIAr(2026, 2026)).toBe(0);
  });
});
