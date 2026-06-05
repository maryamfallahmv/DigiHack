import {describe, expect, test} from 'vitest';
import {formater} from './saksoverskrift';

describe('Oppgave 2 — Saksoverskrift', () => {
  test('foreldrepenger', () => {
    expect(formater('Foreldrepenger', 'Aisha Khan')).toBe(
      'Foreldrepenger — søknad fra Aisha Khan',
    );
  });

  test('dagpenger', () => {
    expect(formater('Dagpenger', 'Lin')).toBe('Dagpenger — søknad fra Lin');
  });

  test('tomme strenger beholder formatet', () => {
    expect(formater('', '')).toBe(' — søknad fra ');
  });
});
