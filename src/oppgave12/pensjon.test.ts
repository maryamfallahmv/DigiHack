import {describe, expect, test} from 'vitest';
import {statusFor} from './pensjon';

describe('Oppgave 12 — Pensjonsstatus', () => {
  test('66 er yrkesaktiv', () => {
    expect(statusFor(66)).toBe('YRKESAKTIV');
  });

  test('67 er pensjonist', () => {
    expect(statusFor(67)).toBe('PENSJONIST');
  });

  test('80 er pensjonist', () => {
    expect(statusFor(80)).toBe('PENSJONIST');
  });
});
