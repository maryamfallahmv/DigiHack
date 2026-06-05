import {describe, expect, test} from 'vitest';
import {snitt} from './snitt-inntekt';

describe('Oppgave 27 — Snitt månedsinntekt', () => {
  test('tre inntekter', () => {
    expect(snitt([30000, 40000, 50000])).toBe(40000);
  });

  test('to inntekter', () => {
    expect(snitt([10000, 20000])).toBe(15000);
  });

  test('desimal', () => {
    expect(snitt([1, 2])).toBe(1.5);
  });

  test('tom liste', () => {
    expect(snitt([])).toBe(0);
  });
});
