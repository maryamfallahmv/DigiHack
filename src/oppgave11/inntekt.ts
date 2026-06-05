export type Inntektskategori = 'LAV' | 'MIDDELS' | 'HOY';

/**
 * Oppgave 11 — Inntektskategori (15 poeng)
 *
 * Plasser en månedslønn i riktig kategori:
 *
 *  - under 30 000 kr             →  LAV
 *  - fra og med 30 000 til og med 60 000 kr  →  MIDDELS
 *  - over 60 000 kr              →  HOY
 *
 *     29999  →  LAV
 *     30000  →  MIDDELS
 *     60000  →  MIDDELS
 *     60001  →  HOY
 */
export function kategoriFor(manedslonn: number): Inntektskategori {
  // TODO
  throw new Error('Oppgave 11 — ikke implementert ennå');
}
