import {describe, expect, test} from 'vitest';
import {dagerFor} from './saksbehandlingsfrist';

describe('Oppgave 13 — Saksbehandlingsfrist', () => {
  test('lav', () => {
    expect(dagerFor('LAV')).toBe(14);
  });

  test('middels', () => {
    expect(dagerFor('MIDDELS')).toBe(21);
  });

  test('hoy', () => {
    expect(dagerFor('HOY')).toBe(30);
  });
});
