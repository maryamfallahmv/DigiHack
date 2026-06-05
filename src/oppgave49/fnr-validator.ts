/**
 * Oppgave 49 — Validering av fødselsnummer (3.parts-bibliotek) (15 poeng)
 *
 * Sjekk om en tekst er et gyldig norsk fødselsnummer. Du skal IKKE skrive
 * Mod-11-logikken selv — bruk biblioteket som allerede ligger i
 * package.json: @navikt/fnrvalidator.
 *
 * Husk at `fnr` kan være null eller undefined — det skal gi false (ikke
 * en kræsj).
 *
 *     '01059010006'  →  true
 *     '01059010005'  →  false   (feil kontrollsiffer)
 *     '0105901000'   →  false   (for kort)
 *     null            →  false
 */
export function erGyldig(fnr: string | null | undefined): boolean {
  // TODO
  throw new Error('Oppgave 49 — ikke implementert ennå');
}
