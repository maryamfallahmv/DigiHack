/**
 * Oppgave 5 — Lag saksnummer (10 poeng)
 *
 * Et saksnummer skrives som "SAK-" etterfulgt av nummeret polstret til
 * minst fire sifre med ledende nuller:
 *
 *     42     →  "SAK-0042"
 *     7      →  "SAK-0007"
 *     1234   →  "SAK-1234"
 *     12345  →  "SAK-12345"   (flere enn fire sifre kuttes ikke)
 */
export function lagSaksnummer(nr: number): string {
   
   return `SAK-${String(nr).padStart(4, '0')}`;
}
