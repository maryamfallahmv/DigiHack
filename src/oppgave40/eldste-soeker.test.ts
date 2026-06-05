import {describe, expect, test} from 'vitest';
import {finnEldste} from './eldste-soeker';
import {lagPerson} from './person';

describe('Oppgave 40 — Finn eldste søker', () => {
  test('en person', () => {
    const aisha = lagPerson('Aisha', 30);
    expect(finnEldste([aisha])).toEqual(aisha);
  });

  test('eldste forst', () => {
    const hassan = lagPerson('Hassan', 80);
    expect(finnEldste([hassan, lagPerson('Lin', 45), lagPerson('Aisha', 30)])).toEqual(hassan);
  });

  test('eldste sist', () => {
    const hassan = lagPerson('Hassan', 80);
    expect(finnEldste([lagPerson('Aisha', 30), lagPerson('Lin', 45), hassan])).toEqual(hassan);
  });

  test('flere like gir forst', () => {
    const astrid = lagPerson('Astrid', 70);
    expect(finnEldste([astrid, lagPerson('Aisha', 30), lagPerson('Hassan', 70)])).toEqual(astrid);
  });

  test('tom', () => {
    expect(finnEldste([])).toBeUndefined();
  });
});
