import {describe, expect, test} from 'vitest';
import {kapitaliser} from './navn';

describe('Oppgave 16 — Stor forbokstav', () => {
  test('smaa bokstaver', () => {
    expect(kapitaliser('aisha khan')).toBe('Aisha Khan');
  });

  test('store bokstaver', () => {
    expect(kapitaliser('AISHA KHAN')).toBe('Aisha Khan');
  });

  test('ett ord', () => {
    expect(kapitaliser('lin')).toBe('Lin');
  });

  test('tre ord', () => {
    expect(kapitaliser('per olav hansen')).toBe('Per Olav Hansen');
  });

  test('tom', () => {
    expect(kapitaliser('')).toBe('');
  });
});
