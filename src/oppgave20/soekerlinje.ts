import type {Person} from './person';

/**
 * Oppgave 20 — Parse søkerlinje (15 poeng)
 *
 * En søkerlinje har formatet "navn;alder". Del på semikolon, fjern
 * mellomrom rundt hvert felt, og lag et Person-objekt med navnet og
 * alderen som tall.
 *
 *     "Aisha;34"        →  {navn: "Aisha", alder: 34}
 *     "Lin Wang;28"     →  {navn: "Lin Wang", alder: 28}
 *     " Hassan ; 67 "   →  {navn: "Hassan", alder: 67}
 *
 * Du kan anta at linja alltid har begge felt.
 */
export function parse(linje: string): Person {
  // TODO
  throw new Error('Oppgave 20 — ikke implementert ennå');
}
