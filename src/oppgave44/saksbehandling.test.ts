import {describe, expect, test} from 'vitest';
import {nesteStatus} from './saksbehandling';

describe('Oppgave 44 — Saksstatus-overgang', () => {
  test('mottatt gir under behandling', () => {
    expect(nesteStatus('MOTTATT')).toBe('UNDER_BEHANDLING');
  });

  test('under behandling gir vedtak', () => {
    expect(nesteStatus('UNDER_BEHANDLING')).toBe('VEDTAK');
  });

  test('vedtak er terminal', () => {
    expect(nesteStatus('VEDTAK')).toBe('VEDTAK');
  });

  test('to steg fra mottatt', () => {
    expect(nesteStatus(nesteStatus('MOTTATT'))).toBe('VEDTAK');
  });

  test('to steg fra vedtak', () => {
    expect(nesteStatus(nesteStatus('VEDTAK'))).toBe('VEDTAK');
  });
});
