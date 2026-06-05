/**
 * Oppgave 45 — Trygg parsing (15 poeng)
 *
 * Skjemafelt kommer inn som tekst, og brukeren kan ha skrevet noe rart.
 * Forsøk å tolke teksten som et heltall — etter at du har trimmet vekk
 * mellomrom i hver ende. Klarer du ikke å tolke den, returnerer du i
 * stedet standardverdien.
 *
 *     ('1000', 0)   →  1000
 *     ('  42 ', 0)  →  42
 *     ('abc', -1)   →  -1
 *     ('', 99)      →  99
 *     ('12x', 7)    →  7
 */
export function parseBelopEller(s: string, standard: number): number {
  // TODO
  throw new Error('Oppgave 45 — ikke implementert ennå');
}
