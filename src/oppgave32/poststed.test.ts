import {describe, expect, test} from 'vitest';
import {poststed} from './poststed';

describe('Oppgave 32 — Poststed-oppslag', () => {
  const tabell = new Map([['0150', 'Oslo'], ['5003', 'Bergen']]);

  test('0150 er Oslo', () => {
    expect(poststed('0150', tabell)).toBe('Oslo');
  });

  test('5003 er Bergen', () => {
    expect(poststed('5003', tabell)).toBe('Bergen');
  });

  test('9999 er Ukjent', () => {
    expect(poststed('9999', tabell)).toBe('Ukjent');
  });

  test('tom tabell er Ukjent', () => {
    expect(poststed('0150', new Map())).toBe('Ukjent');
  });

  test('tom nokkel er Ukjent', () => {
    expect(poststed('', tabell)).toBe('Ukjent');
  });
});
