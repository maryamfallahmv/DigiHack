import {describe, expect, test} from 'vitest';
import {sum} from './inntekt-sum';

describe('Oppgave 26 — Sum årsinntekt', () => {
  test('tre inntekter', () => {
    expect(sum([10000, 20000, 30000])).toBe(60000);
  });

  test('en inntekt', () => {
    expect(sum([5000])).toBe(5000);
  });

  test('tom liste', () => {
    expect(sum([])).toBe(0);
  });

  test('fire like', () => {
    expect(sum([1000, 1000, 1000, 1000])).toBe(4000);
  });
});
