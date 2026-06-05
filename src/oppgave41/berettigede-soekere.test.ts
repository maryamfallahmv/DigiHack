import {describe, expect, test} from 'vitest';
import {filtrer} from './berettigede-soekere';
import {lagPerson} from './person';

describe('Oppgave 41 — Filtrér berettigede søkere', () => {
  test('18 er berettiget', () => {
    const a = lagPerson('A', 18);
    expect(filtrer([a])).toEqual([a]);
  });

  test('66 er berettiget', () => {
    const a = lagPerson('A', 66);
    expect(filtrer([a])).toEqual([a]);
  });

  test('17 er ikke berettiget', () => {
    expect(filtrer([lagPerson('A', 17)])).toEqual([]);
  });

  test('67 er ikke berettiget', () => {
    expect(filtrer([lagPerson('A', 67)])).toEqual([]);
  });

  test('blandet liste', () => {
    const a = lagPerson('A', 30);
    const d = lagPerson('D', 50);
    expect(filtrer([a, lagPerson('B', 70), lagPerson('C', 17), d])).toEqual([a, d]);
  });

  test('tom', () => {
    expect(filtrer([])).toEqual([]);
  });
});
