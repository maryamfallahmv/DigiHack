import {describe, expect, test} from 'vitest';
import {initialer} from './initialer';

describe('Oppgave 15 — Initialer', () => {
  test('Aisha Khan', () => {
    expect(initialer('Aisha Khan')).toBe('AK');
  });

  test('lin wang', () => {
    expect(initialer('lin wang')).toBe('LW');
  });

  test('ett navn', () => {
    expect(initialer('Aisha')).toBe('A');
  });

  test('tre navn', () => {
    expect(initialer('Per Olav Hansen')).toBe('POH');
  });

  test('tom', () => {
    expect(initialer('')).toBe('');
  });
});
