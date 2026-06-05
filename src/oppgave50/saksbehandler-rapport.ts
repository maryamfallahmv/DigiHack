import type {Person} from './person';

/**
 * Oppgave 50 — Saksbehandler-rapport (25 poeng)
 *
 * Lag en kort dagsrapport over en liste søkere. Rapporten har fire linjer
 * skilt med "\n" (ingen avsluttende linjeskift):
 *
 *     Daglig rapport
 *     Antall søkere: <antall>
 *     Antall pensjonister: <antall som er 67 eller eldre>
 *     Eldste: <navn> (<alder>) år
 *
 * En pensjonist er en person med alder >= 67. Eldste er personen med
 * høyest alder; ved lik alder velges den første i lista. Er lista tom,
 * skal siste linje være nøyaktig "Eldste: ingen".
 *
 * Eksempel:
 *     [lagPerson('Aisha', 30), lagPerson('Hassan', 80), lagPerson('Lin', 45)]
 *       →  'Daglig rapport\nAntall søkere: 3\nAntall pensjonister: 1\nEldste: Hassan (80) år'
 */
export function dagligRapport(personer: Person[]): string {
  // TODO
  throw new Error('Oppgave 50 — ikke implementert ennå');
}
