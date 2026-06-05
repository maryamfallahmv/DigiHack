/**
 * Oppgave 48 — Er fristen utløpt? (10 poeng)
 *
 * En frist er utløpt når dagen i dag er ETTER fristen. På selve
 * fristdagen er den ikke utløpt ennå.
 *
 *     frist 2026-06-03,  i dag 2026-06-04  →  true
 *     frist 2026-06-03,  i dag 2026-06-03  →  false  (samme dag)
 *     frist 2026-06-03,  i dag 2026-06-02  →  false  (ikke kommet ennå)
 *
 * Datoene kommer som Date.
 */
export function erUtlopt(frist: Date, iDag: Date): boolean {
  // TODO
  throw new Error('Oppgave 48 — ikke implementert ennå');
}
