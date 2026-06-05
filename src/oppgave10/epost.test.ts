import {describe, expect, test} from 'vitest';
import {erGyldig} from './epost';

describe('Oppgave 10 — Gyldig e-post (forenklet)', () => {
  test('vanlig adresse er gyldig', () => {
    expect(erGyldig('aisha@nav.no')).toBe(true);
  });

  test('kort adresse er gyldig', () => {
    expect(erGyldig('a@b.no')).toBe(true);
  });

  test('uten krøllalfa er ugyldig', () => {
    expect(erGyldig('aishanav.no')).toBe(false);
  });

  test('uten punktum er ugyldig', () => {
    expect(erGyldig('aisha@navno')).toBe(false);
  });

  test('punktum først i domenet er ugyldig', () => {
    expect(erGyldig('aisha@.no')).toBe(false);
  });

  test('ingenting før krøllalfa er ugyldig', () => {
    expect(erGyldig('@nav.no')).toBe(false);
  });
});
