import {describe, expect, test} from 'vitest';
import {sortertSynkende} from './sortering';

describe('Oppgave 29 — Sortér synkende', () => {
  test('3 1 2', () => {
    expect(sortertSynkende([3, 1, 2])).toEqual([3, 2, 1]);
  });

  test('10 20 30', () => {
    expect(sortertSynkende([10, 20, 30])).toEqual([30, 20, 10]);
  });

  test('duplikater', () => {
    expect(sortertSynkende([5, 5, 1])).toEqual([5, 5, 1]);
  });

  test('tom', () => {
    expect(sortertSynkende([])).toEqual([]);
  });

  test('muterer ikke input', () => {
    const input = [3, 1, 2];
    sortertSynkende(input);
    expect(input).toEqual([3, 1, 2]);
  });
});
