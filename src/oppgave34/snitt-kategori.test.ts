import {describe, expect, test} from 'vitest';
import {snittPerKategori} from './snitt-kategori';
import {lagSoker} from './soker';

describe('Oppgave 34 — Snitt per kategori', () => {
  test('lav og middels', () => {
    const sokere = [
      lagSoker('A', 10000, 'Oslo'),
      lagSoker('B', 20000, 'Oslo'),
      lagSoker('C', 40000, 'Oslo'),
      lagSoker('D', 60000, 'Oslo'),
    ];
    expect(snittPerKategori(sokere)).toEqual(new Map([['LAV', 15000], ['MIDDELS', 50000]]));
  });

  test('en lav', () => {
    const sokere = [lagSoker('A', 10000, 'Oslo')];
    expect(snittPerKategori(sokere)).toEqual(new Map([['LAV', 10000]]));
  });

  test('tom', () => {
    expect(snittPerKategori([])).toEqual(new Map());
  });

  test('to hoye', () => {
    const sokere = [lagSoker('A', 70000, 'Oslo'), lagSoker('B', 80000, 'Oslo')];
    expect(snittPerKategori(sokere)).toEqual(new Map([['HOY', 75000]]));
  });

  test('en lav en middels', () => {
    const sokere = [lagSoker('A', 20000, 'Oslo'), lagSoker('B', 40000, 'Oslo')];
    expect(snittPerKategori(sokere)).toEqual(new Map([['LAV', 20000], ['MIDDELS', 40000]]));
  });
});
