import {describe, expect, test} from 'vitest';
import {bar} from './fremdrift';

describe('Oppgave 25 — Fremdriftslinje', () => {
  test('0', () => {
    expect(bar(0)).toBe('□□□□□□□□□□ 0%');
  });

  test('30', () => {
    expect(bar(30)).toBe('■■■□□□□□□□ 30%');
  });

  test('100', () => {
    expect(bar(100)).toBe('■■■■■■■■■■ 100%');
  });

  test('45', () => {
    expect(bar(45)).toBe('■■■■□□□□□□ 45%');
  });
});
