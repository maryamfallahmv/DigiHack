import {describe, expect, test} from 'vitest';
import {grupper} from './gruppering';
import {lagSoker} from './soker';

describe('Oppgave 33 — Grupper etter kategori', () => {
  test('blanding', () => {
    const sokere = [
      lagSoker('A', 10000, 'Oslo'),
      lagSoker('B', 45000, 'Oslo'),
      lagSoker('C', 70000, 'Bergen'),
      lagSoker('D', 20000, 'Oslo'),
    ];
    expect(grupper(sokere)).toEqual(new Map([['LAV', 2], ['MIDDELS', 1], ['HOY', 1]]));
  });

  test('to lave', () => {
    const sokere = [lagSoker('A', 10000, 'Oslo'), lagSoker('B', 29999, 'Oslo')];
    expect(grupper(sokere)).toEqual(new Map([['LAV', 2]]));
  });

  test('tom', () => {
    expect(grupper([])).toEqual(new Map());
  });

  test('grenser middels', () => {
    const sokere = [lagSoker('A', 30000, 'Oslo'), lagSoker('B', 60000, 'Oslo')];
    expect(grupper(sokere)).toEqual(new Map([['MIDDELS', 2]]));
  });

  test('grense hoy', () => {
    const sokere = [lagSoker('A', 60001, 'Oslo')];
    expect(grupper(sokere)).toEqual(new Map([['HOY', 1]]));
  });
});
