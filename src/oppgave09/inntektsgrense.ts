/**
 * Oppgave 9 — Innenfor inntektsgrense (10 poeng)
 *
 * Avgjør om et beløp ligger innenfor en nedre og en øvre grense. Begge
 * grensene er inklusive — et beløp som er nøyaktig lik nedre eller øvre
 * grense regnes som innenfor.
 *
 *     belop=30000, nedre=20000, ovre=40000  →  true
 *     belop=20000, nedre=20000, ovre=40000  →  true
 *     belop=19999, nedre=20000, ovre=40000  →  false
 */
export function innenfor(belop: number, nedre: number, ovre: number): boolean {

   return belop >= nedre && belop <= ovre;
}
