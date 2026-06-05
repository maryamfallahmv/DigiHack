import {describe, expect, test} from 'vitest';
import {lagSoknad} from './soknad-fabrikk';

describe('Oppgave 43 — Definer og valider Soknad', () => {
  test('gyldig soknad', () => {
    expect(lagSoknad('SAK-1', 'Aisha', 1000)).toEqual({
      saksnummer: 'SAK-1',
      navn: 'Aisha',
      belop: 1000,
    });
  });

  test('blankt navn kaster', () => {
    expect(() => lagSoknad('SAK-1', '', 1000)).toThrow();
  });

  test('navn kun mellomrom kaster', () => {
    expect(() => lagSoknad('SAK-1', '  ', 1000)).toThrow();
  });

  test('negativt belop kaster', () => {
    expect(() => lagSoknad('SAK-1', 'Aisha', -1)).toThrow();
  });

  test('blankt saksnummer kaster', () => {
    expect(() => lagSoknad('', 'Aisha', 1000)).toThrow();
  });

  test('belop null er gyldig', () => {
    expect(lagSoknad('SAK-1', 'Aisha', 0)).toEqual({
      saksnummer: 'SAK-1',
      navn: 'Aisha',
      belop: 0,
    });
  });
});
