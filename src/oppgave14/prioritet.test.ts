import {describe, expect, test} from 'vitest';
import {prioritet} from './prioritet';

describe('Oppgave 14 — Prioritetskode', () => {
  test('70 og 50000 er A', () => {
    expect(prioritet(70, 50000)).toBe('A');
  });

  test('67 og 0 er A', () => {
    expect(prioritet(67, 0)).toBe('A');
  });

  test('40 og 20000 er B', () => {
    expect(prioritet(40, 20000)).toBe('B');
  });

  test('40 og 30000 er C', () => {
    expect(prioritet(40, 30000)).toBe('C');
  });

  test('25 og 80000 er C', () => {
    expect(prioritet(25, 80000)).toBe('C');
  });
});
