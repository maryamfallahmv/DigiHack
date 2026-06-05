import {describe, expect, test} from 'vitest';
import {alderFraDato} from './alder-beregner';

describe('Oppgave 46 — Alder fra fødselsdato', () => {
  test('forste pa aaret', () => {
    expect(alderFraDato(new Date(1990, 0, 1), new Date(2026, 5, 3))).toBe(36);
  });

  test('siste pa aaret', () => {
    expect(alderFraDato(new Date(1990, 11, 31), new Date(2026, 5, 3))).toBe(35);
  });

  test('bursdag samme dag', () => {
    expect(alderFraDato(new Date(1990, 5, 3), new Date(2026, 5, 3))).toBe(36);
  });

  test('dagen for bursdag', () => {
    expect(alderFraDato(new Date(1990, 5, 4), new Date(2026, 5, 3))).toBe(35);
  });

  test('fodt samme dato', () => {
    expect(alderFraDato(new Date(2026, 5, 3), new Date(2026, 5, 3))).toBe(0);
  });

  test('akkurat 18', () => {
    expect(alderFraDato(new Date(2008, 5, 2), new Date(2026, 5, 3))).toBe(18);
  });
});
