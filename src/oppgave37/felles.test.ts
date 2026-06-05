import {describe, expect, test} from 'vitest';
import {felles} from './felles';

describe('Oppgave 37 — Felles søkere', () => {
  test('snitt', () => {
    expect(felles(['1', '2', '3'], ['2', '3', '4'])).toEqual(['2', '3']);
  });

  test('ingen felles', () => {
    expect(felles(['1', '2'], ['3', '4'])).toEqual([]);
  });

  test('duplikater fjernes', () => {
    expect(felles(['1', '1', '2'], ['1', '2'])).toEqual(['1', '2']);
  });

  test('tom forste', () => {
    expect(felles([], ['1'])).toEqual([]);
  });

  test('rekkefolge fra forste', () => {
    expect(felles(['x', 'y', 'z'], ['z', 'y'])).toEqual(['y', 'z']);
  });
});
