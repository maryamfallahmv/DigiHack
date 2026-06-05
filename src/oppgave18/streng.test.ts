import {describe, expect, test} from 'vitest';
import {snu} from './streng';

describe('Oppgave 18 — Snu en streng', () => {
  test('abc', () => {
    expect(snu('abc')).toBe('cba');
  });

  test('DigiSis', () => {
    expect(snu('DigiSis')).toBe('siSigiD');
  });

  test('tom', () => {
    expect(snu('')).toBe('');
  });

  test('ett tegn', () => {
    expect(snu('a')).toBe('a');
  });
});
