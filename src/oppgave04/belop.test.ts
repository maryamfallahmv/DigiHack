import {describe, expect, test} from 'vitest';
import {formaterBelop} from './belop';

describe('Oppgave 4 — Formater beløp', () => {
  test('null', () => {
    expect(formaterBelop(0)).toBe('0 kr');
  });

  test('under tusen', () => {
    expect(formaterBelop(999)).toBe('999 kr');
  });

  test('tusen', () => {
    expect(formaterBelop(1000)).toBe('1 000 kr');
  });

  test('trettifem tusen', () => {
    expect(formaterBelop(35000)).toBe('35 000 kr');
  });

  test('million', () => {
    expect(formaterBelop(1234567)).toBe('1 234 567 kr');
  });
});
