import {describe, expect, test} from 'vitest';
import {parse} from './soekerlinje';
import {lagPerson} from './person';

describe('Oppgave 20 — Parse søkerlinje', () => {
  test('enkel', () => {
    expect(parse('Aisha;34')).toEqual(lagPerson('Aisha', 34));
  });

  test('navn med mellomrom', () => {
    expect(parse('Lin Wang;28')).toEqual(lagPerson('Lin Wang', 28));
  });

  test('trimmes rundt felt', () => {
    expect(parse(' Hassan ; 67 ')).toEqual(lagPerson('Hassan', 67));
  });

  test('alder null', () => {
    expect(parse('Per;0')).toEqual(lagPerson('Per', 0));
  });

  test('navn-felt', () => {
    expect(parse('Aisha;34').navn).toBe('Aisha');
  });

  test('alder-felt', () => {
    expect(parse('Aisha;34').alder).toBe(34);
  });
});
