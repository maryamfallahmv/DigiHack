import {describe, expect, test} from 'vitest';
import {mestVanlige} from './mest-vanlige';

describe('Oppgave 35 — Mest vanlige kommune', () => {
  test('Oslo vinner', () => {
    expect(mestVanlige(['Oslo', 'Bergen', 'Oslo'])).toBe('Oslo');
  });

  test('en kommune', () => {
    expect(mestVanlige(['Oslo'])).toBe('Oslo');
  });

  test('tom', () => {
    expect(mestVanlige([])).toBe('');
  });

  test('likhet forste vinner', () => {
    expect(mestVanlige(['Oslo', 'Bergen'])).toBe('Oslo');
  });

  test('tre A', () => {
    expect(mestVanlige(['A', 'B', 'B', 'A', 'A'])).toBe('A');
  });
});
