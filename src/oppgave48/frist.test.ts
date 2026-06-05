import {describe, expect, test} from 'vitest';
import {erUtlopt} from './frist';

describe('Oppgave 48 — Er fristen utløpt?', () => {
  test('dagen etter', () => {
    expect(erUtlopt(new Date(2026, 5, 3), new Date(2026, 5, 4))).toBe(true);
  });

  test('samme dag', () => {
    expect(erUtlopt(new Date(2026, 5, 3), new Date(2026, 5, 3))).toBe(false);
  });

  test('dagen for', () => {
    expect(erUtlopt(new Date(2026, 5, 3), new Date(2026, 5, 2))).toBe(false);
  });

  test('langt etter', () => {
    expect(erUtlopt(new Date(2026, 0, 1), new Date(2026, 11, 31))).toBe(true);
  });
});
