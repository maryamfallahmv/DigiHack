# Hjelp — Oppgave 25: Fremdriftslinje

Du skal lage en linje med 10 celler: noen fylte (`■`) og resten tomme
(`□`), etterfulgt av et mellomrom og prosenten med `%`.

Tenk slik:

- Antall fylte celler er prosenten delt på 10, rundet nedover. Bruk
  `Math.floor(prosent / 10)`.
- **Klem** verdien til mellom 0 og 10: `Math.max(0, Math.min(10, ...))`.
  Da tåler du både negative tall og tall over 100.
- Bygg strengen: `'■'.repeat(fylt)` for de fylte og `'□'.repeat(10 -
  fylt)` for resten. Legg så på `' ' + prosent + '%'`.

Pass på at du bruker akkurat tegnene `■` (U+25A0) og `□` (U+25A1) — kopier
dem gjerne fra oppgaveteksten. Testen sammenligner eksakt.
