import type {Soker} from './soker';

/**
 * Oppgave 34 — Snitt per kategori (20 poeng)
 *
 * Regn ut gjennomsnittlig månedslønn i hver inntektskategori. Kategori
 * bestemmes av månedslønnen (samme terskler som oppgave 33):
 *
 *     manedslonn  < 30000   →  "LAV"
 *     manedslonn <= 60000   →  "MIDDELS"
 *     manedslonn  > 60000   →  "HOY"
 *
 * Returnér et oppslag fra kategori til snitt-lønn. Kategorier uten
 * søkere skal ikke være med i resultatet.
 */
export function snittPerKategori(sokere: Soker[]): Map<string, number> {
  // TODO
  throw new Error('Oppgave 34 — ikke implementert ennå');
}
