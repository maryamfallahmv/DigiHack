import {describe, expect, test} from 'vitest';
import {hils} from './hilsen';

describe('Oppgave 1 — Hilsen til søker', () => {
  test('hilser Aisha', () => {
    expect(hils('Aisha')).toBe('Hei, Aisha! Søknaden din er mottatt.');
  });

  test('hilser Hassan', () => {
    expect(hils('Hassan')).toBe('Hei, Hassan! Søknaden din er mottatt.');
  });
});
