# Hjelp — Oppgave 43: Definer og valider Soknad

Du skal lage en `Soknad`, men sjekke feltene først. Kast en `Error` hvis
`saksnummer` er blankt, `navn` er blankt, eller `belop` er negativt.
Ellers returnér en ny `Soknad`. Et beløp på `0` er gyldig.

Én måte å tenke på:

- «Blankt» betyr tomt eller bare mellomrom. `s.trim()` fjerner
  mellomrom; en tom streng er «falsy», så `!s.trim()` er sann for både
  `""` og `"  "`.
- Sjekk hver regel for seg, og kast så snart en feiler:
  `throw new Error('...')`.
- `belop < 0` er ugyldig, men `belop === 0` skal slippe gjennom.
- Når alt er gyldig: `return {saksnummer, navn, belop};`
