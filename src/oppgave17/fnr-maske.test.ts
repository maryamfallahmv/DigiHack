import {describe, expect, test} from 'vitest';
import {maskerFnr} from './fnr-maske';

describe('Oppgave 17 — Maskér fødselsnummer', () => {
  test('fnr 1', () => {
    expect(maskerFnr('01059012345')).toBe('*******2345');
  });

  test('fnr 2', () => {
    expect(maskerFnr('11223344556')).toBe('*******4556');
  });

  test('fnr 3', () => {
    expect(maskerFnr('00000000000')).toBe('*******0000');
  });

  test('fnr 4', () => {
    expect(maskerFnr('12345678901')).toBe('*******8901');
  });

  test('fnr 5', () => {
    expect(maskerFnr('98765432109')).toBe('*******2109');
  });
});
