import {describe, expect, test} from 'vitest';
import {antallPensjonister} from './person-teller';
import {lagPerson} from './person';

describe('Oppgave 39 — Tell pensjonister', () => {
  test('2 pensjonister', () => {
    const personer = [
      lagPerson('Aisha', 30),
      lagPerson('Hassan', 80),
      lagPerson('Astrid', 67),
    ];
    expect(antallPensjonister(personer)).toBe(2);
  });

  test('0 pensjonister', () => {
    const personer = [lagPerson('Aisha', 30), lagPerson('Lin', 45)];
    expect(antallPensjonister(personer)).toBe(0);
  });

  test('tom', () => {
    expect(antallPensjonister([])).toBe(0);
  });
});
