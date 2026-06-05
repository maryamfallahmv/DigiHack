import {describe, expect, test} from 'vitest';
import {unikeKommuner} from './unike-kommuner';

describe('Oppgave 36 — Unike kommuner', () => {
  test('duplikat sorteres', () => {
    expect(unikeKommuner(['Oslo', 'Bergen', 'Oslo'])).toEqual(['Bergen', 'Oslo']);
  });

  test('bokstaver', () => {
    expect(unikeKommuner(['C', 'A', 'B', 'A'])).toEqual(['A', 'B', 'C']);
  });

  test('tom', () => {
    expect(unikeKommuner([])).toEqual([]);
  });

  test('en kommune', () => {
    expect(unikeKommuner(['Oslo'])).toEqual(['Oslo']);
  });
});
