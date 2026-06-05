import {describe, expect, test} from 'vitest';
import {erMyndig} from './myndig';

describe('Oppgave 6 — Myndig?', () => {
  test('17 er ikke myndig', () => {
    expect(erMyndig(17)).toBe(false);
  });

  test('18 er myndig', () => {
    expect(erMyndig(18)).toBe(true);
  });

  test('19 er myndig', () => {
    expect(erMyndig(19)).toBe(true);
  });

  test('0 er ikke myndig', () => {
    expect(erMyndig(0)).toBe(false);
  });
});
