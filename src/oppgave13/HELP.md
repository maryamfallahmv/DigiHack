# Hjelp — Oppgave 13: Saksbehandlingsfrist

Du skal returnere antall dager saksbehandleren har på en sak, basert på
`Inntektskategori` fra oppgave 11: `LAV` → 14, `MIDDELS` → 21, `HOY` → 30.

Å tenke på:

- **Importer** typen fra oppgave 11 — ikke lag den på nytt. I TypeScript:
  `import type {Inntektskategori} from '../oppgave11/inntekt';`. I Java:
  `import no.digisis.hackathon.spor1.oppgave11.Inntektskategori;`.
- Bruk en `switch` på kategorien med én gren per verdi.
- Hver gren returnerer rett og slett et tall.
