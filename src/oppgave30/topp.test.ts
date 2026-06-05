import {describe, expect, test} from 'vitest';
import {topp3} from './topp';

describe('Oppgave 30 — Topp 3 inntekter', () => {
  test('fem tall', () => {
    expect(topp3([1, 5, 3, 9, 7])).toEqual([9, 7, 5]);
  });

  test('to tall', () => {
    expect(topp3([10, 20])).toEqual([20, 10]);
  });

  test('ett tall', () => {
    expect(topp3([5])).toEqual([5]);
  });

  test('tom', () => {
    expect(topp3([])).toEqual([]);
  });

  test('duplikater', () => {
    expect(topp3([9, 9, 9, 1])).toEqual([9, 9, 9]);
  });
});
