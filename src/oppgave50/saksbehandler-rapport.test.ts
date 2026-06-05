import {describe, expect, test} from 'vitest';
import {dagligRapport} from './saksbehandler-rapport';
import {lagPerson} from './person';

describe('Oppgave 50 — Saksbehandler-rapport', () => {
  test('tre personer', () => {
    expect(dagligRapport([
      lagPerson('Aisha', 30),
      lagPerson('Hassan', 80),
      lagPerson('Lin', 45),
    ])).toBe(
      'Daglig rapport\n' +
      'Antall søkere: 3\n' +
      'Antall pensjonister: 1\n' +
      'Eldste: Hassan (80) år');
  });

  test('tom liste', () => {
    expect(dagligRapport([])).toBe(
      'Daglig rapport\n' +
      'Antall søkere: 0\n' +
      'Antall pensjonister: 0\n' +
      'Eldste: ingen');
  });

  test('en person', () => {
    expect(dagligRapport([
      lagPerson('Aisha', 30),
    ])).toBe(
      'Daglig rapport\n' +
      'Antall søkere: 1\n' +
      'Antall pensjonister: 0\n' +
      'Eldste: Aisha (30) år');
  });

  test('to pensjonister', () => {
    expect(dagligRapport([
      lagPerson('Hassan', 80),
      lagPerson('Astrid', 70),
      lagPerson('Lin', 45),
    ])).toBe(
      'Daglig rapport\n' +
      'Antall søkere: 3\n' +
      'Antall pensjonister: 2\n' +
      'Eldste: Hassan (80) år');
  });
});
