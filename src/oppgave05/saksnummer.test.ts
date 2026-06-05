import {describe, expect, test} from 'vitest';
import {lagSaksnummer} from './saksnummer';

describe('Oppgave 5 — Lag saksnummer', () => {
  test('ett siffer', () => {
    expect(lagSaksnummer(7)).toBe('SAK-0007');
  });

  test('to sifre', () => {
    expect(lagSaksnummer(42)).toBe('SAK-0042');
  });

  test('fire sifre', () => {
    expect(lagSaksnummer(1234)).toBe('SAK-1234');
  });

  test('fem sifre kuttes ikke', () => {
    expect(lagSaksnummer(12345)).toBe('SAK-12345');
  });
});
