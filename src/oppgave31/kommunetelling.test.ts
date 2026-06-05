import {describe, expect, test} from 'vitest';
import {tellPerKommune} from './kommunetelling';

describe('Oppgave 31 — Tell per kommune', () => {
  test('to og en', () => {
    expect(tellPerKommune(['Oslo', 'Oslo', 'Bergen'])).toEqual(
      new Map([['Oslo', 2], ['Bergen', 1]]),
    );
  });

  test('en kommune', () => {
    expect(tellPerKommune(['Oslo'])).toEqual(new Map([['Oslo', 1]]));
  });

  test('tom', () => {
    expect(tellPerKommune([])).toEqual(new Map());
  });

  test('tre og to', () => {
    expect(tellPerKommune(['A', 'B', 'A', 'B', 'A'])).toEqual(
      new Map([['A', 3], ['B', 2]]),
    );
  });

  test('Tromso Bodo', () => {
    expect(tellPerKommune(['Tromso', 'Bodo', 'Tromso'])).toEqual(
      new Map([['Tromso', 2], ['Bodo', 1]]),
    );
  });
});
