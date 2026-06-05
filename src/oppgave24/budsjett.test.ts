import {describe, expect, test} from 'vitest';
import {antallInnvilget} from './budsjett';

describe('Oppgave 24 — Akkumuler til budsjett', () => {
  test('to far plass', () => {
    expect(antallInnvilget([100, 100, 100], 250)).toBe(2);
  });

  test('alle far plass', () => {
    expect(antallInnvilget([100, 100, 100], 300)).toBe(3);
  });

  test('ingen far plass', () => {
    expect(antallInnvilget([100, 100, 100], 50)).toBe(0);
  });

  test('tom liste', () => {
    expect(antallInnvilget([], 100)).toBe(0);
  });

  test('en far plass', () => {
    expect(antallInnvilget([100, 100, 100], 100)).toBe(1);
  });

  test('stopper ved forst som ikke passer', () => {
    expect(antallInnvilget([40, 40, 40], 100)).toBe(2);
  });
});
