/**
 * Oppgave 46 — Alder fra fødselsdato (20 poeng)
 *
 * Regn ut hvor mange hele år en person har fylt på en gitt dato. Du må
 * justere for måned og dag: har personen ikke hatt bursdag ennå i år, er
 * alderen ett år lavere.
 *
 *     1990-01-01  på  2026-06-03  →  36
 *     1990-12-31  på  2026-06-03  →  35   (ikke fylt år ennå)
 *     2026-06-03  på  2026-06-03  →  0    (født samme dag)
 *
 * Datoene kommer som Date. Husk at måned i Date er 0-basert
 * (januar = 0, juni = 5).
 */
export function alderFraDato(fodselsdato: Date, paaDato: Date): number {
  // TODO
  throw new Error('Oppgave 46 — ikke implementert ennå');
}
