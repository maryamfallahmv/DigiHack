import {describe, expect, test} from 'vitest';
import {aarIgjen} from './pensjonsalder';

describe('Oppgave 7 — År til pensjonsalder', () => {
  test('30 gir 37', () => {
    expect(aarIgjen(30)).toBe(37);
  });

  test('66 gir 1', () => {
    expect(aarIgjen(66)).toBe(1);
  });

  test('67 gir 0', () => {
    expect(aarIgjen(67)).toBe(0);
  });

  test('70 gir 0', () => {
    expect(aarIgjen(70)).toBe(0);
  });

  test('0 gir 67', () => {
    expect(aarIgjen(0)).toBe(67);
  });
});
