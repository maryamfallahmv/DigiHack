import {describe, expect, test} from 'vitest';
import {erGyldig} from './postnummer';

describe('Oppgave 8 — Gyldig postnummer', () => {
  test('0150 er gyldig', () => {
    expect(erGyldig('0150')).toBe(true);
  });

  test('0001 er gyldig', () => {
    expect(erGyldig('0001')).toBe(true);
  });

  test('150 er for kort', () => {
    expect(erGyldig('150')).toBe(false);
  });

  test('01500 er for langt', () => {
    expect(erGyldig('01500')).toBe(false);
  });

  test('01a0 har bokstav', () => {
    expect(erGyldig('01a0')).toBe(false);
  });

  test('tom streng er ugyldig', () => {
    expect(erGyldig('')).toBe(false);
  });
});
