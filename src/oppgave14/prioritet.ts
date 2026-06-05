export type Prioritetskode = 'A' | 'B' | 'C';

/**
 * Oppgave 14 — Prioritetskode (15 poeng)
 *
 * En sak får en prioritetskode (A, B eller C) ut fra søkerens alder og
 * månedslønn:
 *
 *     alder 67 eller mer        →  A
 *     ellers, månedslønn < 30000 →  B
 *     ellers                    →  C
 *
 * Sjekk reglene i denne rekkefølgen — den første som passer bestemmer.
 *
 *     prioritet(70, 50000)  →  'A'
 *     prioritet(40, 20000)  →  'B'
 *     prioritet(40, 30000)  →  'C'
 */
export function prioritet(alder: number, manedslonn: number): Prioritetskode {
  // TODO
  throw new Error('Oppgave 14 — ikke implementert ennå');
}
