import {describe, expect, test} from 'vitest';
import {kategoriFor} from './inntekt';

describe('Oppgave 11 — Inntektskategori', () => {
  test('29999 er lav', () => {
    expect(kategoriFor(29999)).toBe('LAV');
  });

  test('30000 er middels', () => {
    expect(kategoriFor(30000)).toBe('MIDDELS');
  });

  test('60000 er middels', () => {
    expect(kategoriFor(60000)).toBe('MIDDELS');
  });

  test('60001 er høy', () => {
    expect(kategoriFor(60001)).toBe('HOY');
  });
});
