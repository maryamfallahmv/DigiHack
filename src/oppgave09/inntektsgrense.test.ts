import {describe, expect, test} from 'vitest';
import {innenfor} from './inntektsgrense';

describe('Oppgave 9 — Innenfor inntektsgrense', () => {
  test('30000 er innenfor', () => {
    expect(innenfor(30000, 20000, 40000)).toBe(true);
  });

  test('20000 er innenfor', () => {
    expect(innenfor(20000, 20000, 40000)).toBe(true);
  });

  test('40000 er innenfor', () => {
    expect(innenfor(40000, 20000, 40000)).toBe(true);
  });

  test('19999 er under', () => {
    expect(innenfor(19999, 20000, 40000)).toBe(false);
  });

  test('40001 er over', () => {
    expect(innenfor(40001, 20000, 40000)).toBe(false);
  });
});
