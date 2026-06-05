import {describe, expect, test} from 'vitest';
import {mangler} from './mangler';

describe('Oppgave 38 — Mangler i listen', () => {
  test('mangler noen', () => {
    expect(mangler(['1', '2', '3'], ['2'])).toEqual(['1', '3']);
  });

  test('ingen mangler', () => {
    expect(mangler(['1', '2'], ['1', '2'])).toEqual([]);
  });

  test('alle mangler', () => {
    expect(mangler(['1', '2', '3'], [])).toEqual(['1', '2', '3']);
  });

  test('tom forventet', () => {
    expect(mangler([], ['1'])).toEqual([]);
  });

  test('duplikater fjernes', () => {
    expect(mangler(['a', 'a', 'b'], ['b'])).toEqual(['a']);
  });
});
