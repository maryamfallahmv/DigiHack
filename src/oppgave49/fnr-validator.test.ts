import {describe, expect, test} from 'vitest';
import {erGyldig} from './fnr-validator';

describe('Oppgave 49 — Validering av fødselsnummer', () => {
  test('gyldig', () => {
    expect(erGyldig('01059010006')).toBe(true);
  });

  test('feil kontrollsiffer', () => {
    expect(erGyldig('01059010005')).toBe(false);
  });

  test('for kort', () => {
    expect(erGyldig('0105901000')).toBe(false);
  });

  test('bokstaver', () => {
    expect(erGyldig('01059abc006')).toBe(false);
  });

  test('null', () => {
    expect(erGyldig(null)).toBe(false);
  });

  test('med mellomrom', () => {
    expect(erGyldig('01 590 10006')).toBe(false);
  });
});
