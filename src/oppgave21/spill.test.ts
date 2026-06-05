import {describe, expect, test} from 'vitest';
import {spill} from './spill';

describe('Oppgave 21 — Saksnummer-spill', () => {
  test('1', () => {
    expect(spill(1)).toEqual(['1']);
  });

  test('3', () => {
    expect(spill(3)).toEqual(['1', '2', 'Sak']);
  });

  test('5', () => {
    expect(spill(5)).toEqual(['1', '2', 'Sak', '4', 'Frist']);
  });

  test('15', () => {
    expect(spill(15)).toEqual([
      '1', '2', 'Sak', '4', 'Frist', 'Sak', '7', '8', 'Sak',
      'Frist', '11', 'Sak', '13', '14', 'SakFrist',
    ]);
  });

  test('0 er tom', () => {
    expect(spill(0)).toEqual([]);
  });
});
