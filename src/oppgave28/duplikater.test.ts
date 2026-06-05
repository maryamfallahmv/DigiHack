import {describe, expect, test} from 'vitest';
import {unike} from './duplikater';

describe('Oppgave 28 — Fjern duplikater', () => {
  test('ett duplikat', () => {
    expect(unike([1, 2, 2, 3])).toEqual([1, 2, 3]);
  });

  test('alle like', () => {
    expect(unike([5, 5, 5])).toEqual([5]);
  });

  test('ingen duplikater', () => {
    expect(unike([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('tom liste', () => {
    expect(unike([])).toEqual([]);
  });

  test('bevarer rekkefolge', () => {
    expect(unike([3, 1, 3, 2, 1])).toEqual([3, 1, 2]);
  });
});
