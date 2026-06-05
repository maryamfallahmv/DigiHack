import {describe, expect, test} from 'vitest';
import {tellVokaler} from './vokaler';

describe('Oppgave 19 — Tell vokaler', () => {
  test('saksbehandler', () => {
    expect(tellVokaler('saksbehandler')).toBe(4);
  });

  test('alle store', () => {
    expect(tellVokaler('AEIOU')).toBe(5);
  });

  test('xyz', () => {
    expect(tellVokaler('xyz')).toBe(1);
  });

  test('Bjørn', () => {
    expect(tellVokaler('Bjørn')).toBe(1);
  });

  test('tom', () => {
    expect(tellVokaler('')).toBe(0);
  });
});
