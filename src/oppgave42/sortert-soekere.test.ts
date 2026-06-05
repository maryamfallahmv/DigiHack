import {describe, expect, test} from 'vitest';
import {sorterSoekere} from './sortert-soekere';
import {lagPerson} from './person';

describe('Oppgave 42 — Sortér søkere', () => {
  test('sorter pa alder synkende', () => {
    const a = lagPerson('A', 30);
    const b = lagPerson('B', 50);
    const c = lagPerson('C', 40);
    expect(sorterSoekere([a, b, c])).toEqual([b, c, a]);
  });

  test('lik alder sorter pa navn', () => {
    const bea = lagPerson('Bea', 40);
    const ada = lagPerson('Ada', 40);
    expect(sorterSoekere([bea, ada])).toEqual([ada, bea]);
  });

  test('tom', () => {
    expect(sorterSoekere([])).toEqual([]);
  });

  test('en person', () => {
    const x = lagPerson('X', 25);
    expect(sorterSoekere([x])).toEqual([x]);
  });

  test('blandet', () => {
    const lin = lagPerson('Lin', 30);
    const aisha = lagPerson('Aisha', 30);
    const hassan = lagPerson('Hassan', 80);
    expect(sorterSoekere([lin, aisha, hassan])).toEqual([hassan, aisha, lin]);
  });
});
